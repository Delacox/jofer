import reflex as rx
import jofer.styles.styles as styles
from jofer.styles.size import Size
from jofer.styles.color import Color
from jofer.components.title import title
from jofer.components.subtitle import subtitle

def data(number: int, texto: str) -> rx.Component: 
    return rx.vstack(
        title(number, Color.GREEN_INTENSITY4.value),
        subtitle(texto, Color.BLACK.value)
    )