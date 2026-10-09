import sys
from pathlib import Path
import pytest
from pptx import Presentation

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "skills/present/references"))
import build_deck

def spec(slides, mode="live", **kw):
    return {"title": "Test deck", "mode": mode, "slides": slides, **kw}

def cnvpr(shape):
    return shape._element.xpath("./*[1]/p:cNvPr")[0]

def test_titles_and_notes(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([
        {"layout": "title", "title": "Fieldnotes diary study", "notes": "Open with the problem."},
        {"layout": "claim_bullets", "title": "Technicians write notes after the job",
         "bullets": ["7 of 9 wrote in the van"], "notes": "Claim, then P4's quote."},
    ]), out)
    prs = Presentation(out)
    assert [s.shapes.title.text for s in prs.slides] == ["Fieldnotes diary study", "Technicians write notes after the job"]
    assert prs.slides[1].notes_slide.notes_text_frame.text == "Claim, then P4's quote."

def test_nested_bullets_rejected(tmp_path):
    with pytest.raises(ValueError, match="flat"):
        build_deck.build(spec([{"layout": "claim_bullets", "title": "A claim title here", "bullets": ["a", ["b"]]}]), tmp_path / "d.pptx")

def test_unknown_layout_rejected(tmp_path):
    with pytest.raises(ValueError, match="layout"):
        build_deck.build(spec([{"layout": "agenda", "title": "Agenda"}]), tmp_path / "d.pptx")

def test_missing_title_rejected(tmp_path):
    with pytest.raises(ValueError, match="title"):
        build_deck.build(spec([{"layout": "claim_bullets", "title": " ", "bullets": ["a"]}]), tmp_path / "d.pptx")

def test_visual_requires_alt(tmp_path):
    with pytest.raises(ValueError, match="alt"):
        build_deck.build(spec([{"layout": "claim_visual", "title": "A claim title here", "placeholder": "SCREENSHOT: step 2"}]), tmp_path / "d.pptx")

def test_placeholder_frame_carries_label_and_alt(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "claim_visual", "title": "Option B removes the ambiguity",
        "placeholder": "SCREENSHOT: step 2, option B", "alt": "Visit type chosen before times appear"}]), out)
    shapes = list(Presentation(out).slides[0].shapes)
    frame = next(s for s in shapes if s.has_text_frame and "SCREENSHOT" in s.text_frame.text)
    assert frame.text_frame.text == "[SCREENSHOT: step 2, option B]"
    assert cnvpr(frame).get("descr") == "Visit type chosen before times appear"

def test_bar_chart_starts_at_zero(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "claim_chart", "title": "Downgrade tickets dominate billing support",
        "chart": {"type": "bar", "categories": ["Downgrade", "Refund"], "series": [{"name": "Tickets", "values": [1240, 310]}], "highlight": 0},
        "alt": "Downgrade tickets 1,240 a month versus 310 refunds"}]), out)
    ch = next(s for s in Presentation(out).slides[0].shapes if s.has_chart)
    assert ch.chart.value_axis.minimum_scale == 0
    assert cnvpr(ch).get("descr").startswith("Downgrade tickets")

def test_read_mode_body_text(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "claim_bullets", "title": "Self-serve downgrades cut support load",
        "body": "Customers must contact support today.", "bullets": ["1,240 tickets a month"]}], mode="read"), out)
    text = " ".join(s.text_frame.text for s in Presentation(out).slides[0].shapes if s.has_text_frame)
    assert "Customers must contact support today." in text

def test_template_layouts_used(tmp_path):
    tpl = tmp_path / "tpl.pptx"
    p = Presentation(); p.save(tpl)
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "title", "title": "Templated deck"}], template=str(tpl)), out)
    prs = Presentation(out)
    assert prs.slides[0].slide_layout.name == "Title Slide"
    assert prs.slides[0].shapes.title.text == "Templated deck"

def test_visual_and_bullets_do_not_overlap(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "claim_visual", "title": "Option B removes the ambiguity",
        "placeholder": "SCREENSHOT: step 2", "alt": "Step two screen", "bullets": ["one", "two"]}]), out)
    shapes = list(Presentation(out).slides[0].shapes)
    frame = next(s for s in shapes if s.has_text_frame and "SCREENSHOT" in s.text_frame.text)
    bul = next(s for s in shapes if s.has_text_frame and s.text_frame.text.startswith("•"))
    assert frame.left + frame.width <= bul.left

def test_template_without_title_placeholder_rejected(tmp_path):
    # Layout removal is feasible via SlideLayouts.remove (python-pptx 1.0).
    p = Presentation()
    for lay in list(p.slide_layouts):
        if lay.name != "Blank":
            p.slide_layouts.remove(lay)
    tpl = tmp_path / "blank.pptx"; p.save(tpl)
    with pytest.raises(ValueError, match="title placeholder"):
        build_deck.build(spec([{"layout": "title", "title": "X deck"}], template=str(tpl)), tmp_path / "d.pptx")

def test_default_title_spans_content_width(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "title", "title": "Wide title"}]), out)
    prs = Presentation(out)
    assert prs.slides[0].shapes.title.width == prs.slide_width - 2 * build_deck.M

def test_chart_spec_validated(tmp_path):
    bad = {"type": "bar", "categories": ["a", "b"], "series": [{"name": "s", "values": [1]}]}
    with pytest.raises(ValueError, match="slide 1"):
        build_deck.build(spec([{"layout": "claim_chart", "title": "A claim title here", "chart": bad, "alt": "x"}]), tmp_path / "d.pptx")
    with pytest.raises(ValueError, match="chart"):
        build_deck.build(spec([{"layout": "claim_chart", "title": "A claim title here", "chart": {"type": "pie"}, "alt": "x"}]), tmp_path / "d.pptx")

def test_chart_labeled_directly_without_legend(tmp_path):
    out = tmp_path / "d.pptx"
    build_deck.build(spec([{"layout": "claim_chart", "title": "Redesign cut errors in both regions",
        "chart": {"type": "bar", "categories": ["EU", "US"],
                  "series": [{"name": "After", "values": [12, 9]}, {"name": "Before", "values": [30, 28]}], "highlight": 0},
        "alt": "Errors fell in both regions after the redesign"}], mode="read"), out)
    ch = next(s for s in Presentation(out).slides[0].shapes if s.has_chart).chart
    assert len(list(ch.series)) == 2
    assert ch.has_legend is False
    plot = ch.plots[0]
    assert plot.has_data_labels
    dl = plot.data_labels
    assert dl.show_value
    assert dl.number_format == "General"
    assert dl.font.size.pt == build_deck.SIZES["read"]["small"]
