
from jofer.styles import styles
import reflex as rx
from jofer.styles.size import Size
from jofer.components.navbar import navbar
from jofer.views.about import about
from jofer.views.datas import datas
from jofer.views.services import services

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
        rx.center(
            rx.vstack(
                services(),
                max_width=styles.MAX_WIDTH,
            )       
        ),
        
        
        spacing = Size.DEFAULT.value      
    )
    



# Create the app and compile it.
app = rx.App(
    style=styles.BASE_STYLES,
    stylesheets=["./styles.css"])
app.add_page(
    index,
    title="JOFER | Excelencia en asesoría para tu empresa",
    description="Con más de cuatro décadas de experiencia somos líderes provinciales en servicios para pequeñas y medianas empresas.",
    image="logo.jpg")
app.compile() 
