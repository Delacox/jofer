import reflex as rx
from jofer.styles.size import Size
from jofer.styles.fonts import Fonts


def subtitle(text: str, color: str) -> rx.Component: 
    return rx.heading(
        text,
        color = color,
        font_family = Fonts.DEFAULT.value,
        font_size = Size.LARGE.value,
        padding_bottom = Size.MEDIUM.value
        
    )
