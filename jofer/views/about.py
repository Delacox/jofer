import reflex as rx
from jofer.styles.size import Size
from jofer.styles.color import Color
from jofer.components.title import title
from jofer.components.button import button

def about() -> rx.Component: 
    return rx.vstack(
                
        title("Nosotros", Color.GREEN_LOGO.value),
        
        rx.hstack(
            rx.flex(rx.image(
                src="nosotros.jpg", 
                width="100%", 
                height="auto",
                border_radius = "2%",
                ),
            ),
            
            rx.vstack(
                rx.text(
                    "Descubre la excelencia en asesoría para tu empresa.",
                    color = Color.GREEN_INTENSITY4.value,
                    font_size = Size.LARGE.value,
                    margin_top = Size.ZERO.value
                ),
                
                
                rx.text(
                    "Con más de cuatro décadas de experiencia.",
                    color=Color.GREEN_INTENSITY3.value,
                    font_size = Size.LARGE.value,
                    margin_top = Size.ZERO.value
                ),
                
                rx.text(
                    """ 
                    Somos líderes provinciales en servicios para pequeñas y medianas 
                    empresas. Nuestro equipo cohesionado de 10 profesionales
                    te ofrece soluciones eficientes y rápidas. Autorizados 
                    para tramitar electrónicamente documentos esenciales, 
                    nos mantenemos a la vanguardia de los cambios 
                    legislativos, manteniéndote informado. Bienvenido a 
                    tu socio de confianza para el éxito empresarial.""",
                    font_size = Size.DEFAULT.value,
                    margin_top = Size.ZERO.value 
                ), 
                
                
                
                
                rx.link(
                    button("Solicitar ahora", Color.GREEN_INTENSITY4.value,)                     
                ),
                    
                    
                             
                
                align_items = "start",
                width = "95%",
                
                
            ),
            
            spacing = Size.BIG.value,   
            padding_top = Size.DEFAULT.value,

     
        ),
        
        spacing = Size.LARGE.value,
        padding_top = Size.MEDIUM.value,
 
    
    )
    
    

