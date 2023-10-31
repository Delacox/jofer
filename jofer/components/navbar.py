import reflex as rx
import jofer.styles.styles as styles
from jofer.styles.size import Size
from jofer.styles.color import Color

def navbar() -> rx.Component: 
    return rx.hstack(
        
        rx.hstack(
            rx.image(src="logo.png", width = Size.BIG.value),
            rx.span("JOFER ", color = Color.WHITE.value),
            rx.span("ASESORES", color = Color.GREEN_LOGO.value),
            style = styles.navbar_title_style
        ),
        rx.spacer(),
        rx.hstack(
            rx.link("Nosotros", color = Color.WHITE.value),
            rx.spacer(),
            rx.link("Servicios", color = Color.WHITE.value),
            rx.spacer(),
            rx.link("Enlaces", color = Color.WHITE.value),
            rx.spacer(),
            rx.link("Contacto", color = Color.WHITE.value),
        ),
        bg = Color.BLACK.value,
        width = "100%",
        padding = Size.LARGE.value,
        padding_x = Size.VERY_BIG2.value,
        position = "sticky",
        z_index = "999",
        top = "0"
        
    )
    