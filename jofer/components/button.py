import reflex as rx
from jofer.styles.size import Size
from jofer.styles.color import Color
from jofer.styles.fonts import Fonts

def button(texto: str, color: str) -> rx.Component:                      
    return rx.fragment(
        rx.button(
        texto,
        font_family = Fonts.DEFAULT.value, 
        font_size = Size.DEFAULT.value,
        bg = color,  
        color = Color.WHITE.value, 
        margin_top = Size.LARGE.value,
        size = "lg",
        _hover = {
            "bg": Color.BLACK.value
        }                                                 
    ),
)
    