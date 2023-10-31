
from jofer.styles import styles
import reflex as rx
from jofer.styles.size import Size
from jofer.components.navbar import navbar
from jofer.views.about import about
from jofer.views.datas import datas
from jofer.components.data import data

def index() -> rx.Component:
    return rx.box(
        navbar(),        
        rx.center(
            rx.vstack(
                about(),
                max_width=styles.MAX_WIDTH,
            )       
        ),
        datas(),
        
        spacing = Size.DEFAULT.value      
    )
    



# Create the app and compile it.
app = rx.App(
    style=styles.BASE_STYLES,
    stylesheets=["./styles.css"])
app.add_page(index)
app.compile() 
