import reflex as rx
from jofer.styles.size import Size
from jofer.styles.color import Color


def button(texto: str) -> rx.Component:                      
    return rx.fragment(
        rx.button(
        texto,
        font_size = Size.DEFAULT.value,
        bg = Color.GREEN_INTENSITY3.value,   
        color = Color.WHITE.value, 
        margin_top = Size.LARGE.value,
        size = "lg",
        _hover = {
            "bg": Color.BLACK.value
        }                                                 
    ),
)
    