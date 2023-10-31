import reflex as rx
from jofer.styles.size import Size
from jofer.styles.color import Color
from jofer.components.data import data


def datas() -> rx.Component: 
    return rx.center(
         
        rx.hstack(   
            data("+20k", "Clientes atendidos"),            
            data("+18k", "Altas de autónomos"),            
            data("+15k", "Clientes atendidos"),
            spacing = Size.VERY_BIG2.value,
            padding_bottom = Size.MEDIUM.value
            
        ),
        width = "100%",
        bg = Color.GREEN_INTENSITY2.value,
        margin_top = Size.VERY_BIG.value,

    )

