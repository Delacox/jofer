import reflex as rx
from jofer.styles.size import Size
from jofer.styles.fonts import Fonts
from jofer.styles.color import Color


def title(text: str, color: str) -> rx.Component: 
    return rx.heading(
        text,
        rx.divider(border_color=Color.GREEN_INTENSITY2.value),
        color = color,
        font_family = Fonts.TITLE.value,
        font_size = Size.TITLE.value,
        padding_top = Size.MEDIUM.value
        
    )
