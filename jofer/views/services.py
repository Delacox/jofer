import reflex as rx
from jofer.styles.size import Size
from jofer.styles.color import Color
from jofer.components.title import title
from jofer.components.button import button

def services() -> rx.Component:
    return rx.vstack(
        
            
            title("Servicios", Color.GREEN_LOGO.value),

            rx.hstack(
                rx.card(
                    rx.vstack(
                        rx.text("""Deje que nos encarguemos de todas sus necesidades fiscales. Desde altas y bajas hasta impuestos de sociedades
                                y representación en inspecciones. Nuestros expertos se encargan de todo, garantizando que su empresa cumpla con 
                                todas las regulaciones fiscales. Con nosotros, su carga fiscal se convierte en nuestra responsabilidad, brindándole 
                                tranquilidad y tiempo para concentrarse en lo que realmente importa."""),
                        button("Contacta con uno de nuestros profesionales", Color.GREEN_INTENSITY4.value,),
                        spacing = Size.LARGE.value, 
                              ),
                    
                    header=rx.center(
                        rx.vstack(rx.icon(tag='info', font_size=Size.BIG.value),
                        rx.heading("Servicio Fiscal", size="lg")
                        ),
                    ),
                    size="lg",
                    bg = Color.GREEN_INTENSITY2.value,
                ),
                rx.card(
                    rx.vstack(
                        rx.text("""Delegue sus preocupaciones laborales en nosotros. Nos encargamos de todo, desde altas y bajas hasta contratos, nóminas
                                y representación legal. Con nuestra experiencia, garantizamos una gestión sin complicaciones para que pueda centrarse en el 
                                crecimiento de su empresa."""),
                        button("Contacta con uno de nuestros profesionales", Color.GREEN_INTENSITY4.value,),
                        spacing = Size.LARGE.value, 
                    ),
                    header=rx.center(
                        rx.vstack(rx.icon(tag='info', font_size=Size.BIG.value),
                        rx.heading("Servicio Laboral", size="lg")
                        ),
                    ),
                    size="lg",
                    bg = Color.GREEN_INTENSITY2.value,
                ),
                spacing = Size.BIG.value,
                padding_top=Size.BIG.value
                
            ),
            rx.hstack(
                rx.card(
                    rx.vstack(
                        rx.text("""Nuestros servicios de Estimación Objetiva, Contabilidad Mecanizada y Estimación Directa/Simplificada 
                                están diseñados para liberarlo de la complejidad financiera. Nos encargamos de todos los detalles, desde registros
                                de compras y gastos hasta informes detallados de IVA y cuentas de resultados. Con nosotros, su empresa estará en manos
                                expertas, permitiéndole enfocarse en lo que hace mejor: hacer crecer su negocio."""),
                        button("Contacta con uno de nuestros profesionales", Color.GREEN_INTENSITY4.value,),
                        spacing = Size.LARGE.value,  
                    ),
                    header=rx.center(
                        rx.vstack(rx.icon(tag='info', font_size=Size.BIG.value),
                        rx.heading("Servicio Contable", size="lg")
                        ),
                                       
                    ),
                    size="lg",
                    bg = Color.GREEN_INTENSITY2.value,
                ),
                rx.card(
                    rx.vstack(
                        rx.text("""Ofrecemos un asesoramiento legal completo para nuestros clientes.
                                Desde sucesiones y donaciones hasta contratos y arrendamientos, nos encargamos de todos los aspectos legales.
                                Además, proporcionamos orientación experta en recursos y asuntos relacionados con empleadas de hogar. Con nuestro 
                                equipo legal a su lado, puede estar seguro de que sus intereses están protegidos en cada paso del camino."""),
                        button("Contacta con uno de nuestros profesionales", Color.GREEN_INTENSITY4.value,),
                        spacing = Size.LARGE.value,  
                    ),
                    header=rx.center(
                        rx.vstack(rx.icon(tag='info', font_size=Size.BIG.value),
                        rx.heading("Servicio Jurídico", size="lg"))                        
                        ),
                    size="lg",
                    bg = Color.GREEN_INTENSITY2.value, 
                     
                ),
                
                spacing = Size.BIG.value,
            ),
            spacing = Size.DEFAULT.value,
            margin_top = Size.VERY_BIG.value,
            
        )
        
    
