import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Card, CardBody, CardHeader, Center, Divider, Flex, Heading, HStack, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { InfoIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Box sx={{"spacing": "1em"}}>
  <HStack sx={{"bg": "#202020", "width": "100%", "padding": "1.5em", "paddingX": "6em", "position": "sticky", "zIndex": "999", "top": "0"}}>
  <HStack sx={{"fontFamily": "Comfortaa", "fontSize": "1.5em"}}>
  <Image src={`logo.png`} sx={{"width": "2em"}}/>
  <Text as={`span`} sx={{"color": "#F0F0F0"}}>
  {`JOFER `}
</Text>
  <Text as={`span`} sx={{"color": "#008D00"}}>
  {`ASESORES`}
</Text>
</HStack>
  <Spacer/>
  <HStack>
  <Link as={``} sx={{"color": "#F0F0F0", "textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  {`Nosotros`}
</Link>
  <Spacer/>
  <Link as={``} sx={{"color": "#F0F0F0", "textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  {`Servicios`}
</Link>
  <Spacer/>
  <Link as={``} sx={{"color": "#F0F0F0", "textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  {`Enlaces`}
</Link>
  <Spacer/>
  <Link as={``} sx={{"color": "#F0F0F0", "textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  {`Contacto`}
</Link>
</HStack>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "1150px"}}>
  <VStack spacing={`1.5em`} sx={{"paddingTop": "0.8em"}}>
  <Heading sx={{"color": "#008D00", "fontFamily": "Poppins", "fontSize": "3em", "paddingTop": "0.8em"}}>
  {`Nosotros`}
  <Divider sx={{"borderColor": "#A8CE6B"}}/>
</Heading>
  <HStack spacing={`2em`} sx={{"paddingTop": "1em"}}>
  <Flex>
  <Image src={`nosotros.jpg`} sx={{"width": "100%", "height": "auto", "borderRadius": "2%"}}/>
</Flex>
  <VStack alignItems={`start`} sx={{"width": "95%"}}>
  <Text sx={{"color": "#00672D", "fontSize": "1.5em", "marginTop": "0px !important"}}>
  {`Descubre la excelencia en asesoría para tu empresa.`}
</Text>
  <Text sx={{"color": "#6AAD3B", "fontSize": "1.5em", "marginTop": "0px !important"}}>
  {`Con más de cuatro décadas de experiencia.`}
</Text>
  <Text sx={{"fontSize": "1em", "marginTop": "0px !important"}}>
  {` 
                    Somos líderes provinciales en servicios para pequeñas y medianas 
                    empresas. Nuestro equipo cohesionado de 10 profesionales
                    te ofrece soluciones eficientes y rápidas. Autorizados 
                    para tramitar electrónicamente documentos esenciales, 
                    nos mantenemos a la vanguardia de los cambios 
                    legislativos, manteniéndote informado. Bienvenido a 
                    tu socio de confianza para el éxito empresarial.`}
</Text>
  <Link as={``} sx={{"textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  <Fragment>
  <Button size={`lg`} sx={{"fontFamily": "Poppins", "fontSize": "1em", "bg": "#00672D", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Solicitar ahora`}
</Button>
</Fragment>
</Link>
</VStack>
</HStack>
</VStack>
</VStack>
</Center>
  <Center sx={{"width": "100%", "bg": "#A8CE6B", "marginTop": "4em"}}>
  <HStack spacing={`6em`} sx={{"paddingBottom": "0.8em"}}>
  <VStack>
  <Heading sx={{"color": "#00672D", "fontFamily": "Poppins", "fontSize": "3em", "paddingTop": "0.8em"}}>
  {`+20k`}
  <Divider sx={{"borderColor": "#A8CE6B"}}/>
</Heading>
  <Heading sx={{"color": "#202020", "fontFamily": "Poppins", "fontSize": "1.5em", "paddingBottom": "0.8em"}}>
  {`Clientes atendidos`}
</Heading>
</VStack>
  <VStack>
  <Heading sx={{"color": "#00672D", "fontFamily": "Poppins", "fontSize": "3em", "paddingTop": "0.8em"}}>
  {`+18k`}
  <Divider sx={{"borderColor": "#A8CE6B"}}/>
</Heading>
  <Heading sx={{"color": "#202020", "fontFamily": "Poppins", "fontSize": "1.5em", "paddingBottom": "0.8em"}}>
  {`Altas de autónomos`}
</Heading>
</VStack>
  <VStack>
  <Heading sx={{"color": "#00672D", "fontFamily": "Poppins", "fontSize": "3em", "paddingTop": "0.8em"}}>
  {`+15k`}
  <Divider sx={{"borderColor": "#A8CE6B"}}/>
</Heading>
  <Heading sx={{"color": "#202020", "fontFamily": "Poppins", "fontSize": "1.5em", "paddingBottom": "0.8em"}}>
  {`Clientes atendidos`}
</Heading>
</VStack>
</HStack>
</Center>
  <Center>
  <VStack sx={{"maxWidth": "1150px"}}>
  <VStack spacing={`1em`} sx={{"marginTop": "4em"}}>
  <Heading sx={{"color": "#008D00", "fontFamily": "Poppins", "fontSize": "3em", "paddingTop": "0.8em"}}>
  {`Servicios`}
  <Divider sx={{"borderColor": "#A8CE6B"}}/>
</Heading>
  <HStack spacing={`2em`} sx={{"paddingTop": "2em"}}>
  <Card size={`lg`} sx={{"bg": "#A8CE6B"}}>
  <CardHeader>
  <Center>
  <VStack>
  <InfoIcon sx={{"fontSize": "2em"}}/>
  <Heading size={`lg`}>
  {`Servicio Fiscal`}
</Heading>
</VStack>
</Center>
</CardHeader>
  <CardBody>
  <VStack spacing={`1.5em`}>
  <Text>
  {`Deje que nos encarguemos de todas sus necesidades fiscales. Desde altas y bajas hasta impuestos de sociedades
                                y representación en inspecciones. Nuestros expertos se encargan de todo, garantizando que su empresa cumpla con 
                                todas las regulaciones fiscales. Con nosotros, su carga fiscal se convierte en nuestra responsabilidad, brindándole 
                                tranquilidad y tiempo para concentrarse en lo que realmente importa.`}
</Text>
  <Fragment>
  <Button size={`lg`} sx={{"fontFamily": "Poppins", "fontSize": "1em", "bg": "#00672D", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Contacta con uno de nuestros profesionales`}
</Button>
</Fragment>
</VStack>
</CardBody>
</Card>
  <Card size={`lg`} sx={{"bg": "#A8CE6B"}}>
  <CardHeader>
  <Center>
  <VStack>
  <InfoIcon sx={{"fontSize": "2em"}}/>
  <Heading size={`lg`}>
  {`Servicio Laboral`}
</Heading>
</VStack>
</Center>
</CardHeader>
  <CardBody>
  <VStack spacing={`1.5em`}>
  <Text>
  {`Delegue sus preocupaciones laborales en nosotros. Nos encargamos de todo, desde altas y bajas hasta contratos, nóminas
                                y representación legal. Con nuestra experiencia, garantizamos una gestión sin complicaciones para que pueda centrarse en el 
                                crecimiento de su empresa.`}
</Text>
  <Fragment>
  <Button size={`lg`} sx={{"fontFamily": "Poppins", "fontSize": "1em", "bg": "#00672D", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Contacta con uno de nuestros profesionales`}
</Button>
</Fragment>
</VStack>
</CardBody>
</Card>
</HStack>
  <HStack spacing={`2em`}>
  <Card size={`lg`} sx={{"bg": "#A8CE6B"}}>
  <CardHeader>
  <Center>
  <VStack>
  <InfoIcon sx={{"fontSize": "2em"}}/>
  <Heading size={`lg`}>
  {`Servicio Contable`}
</Heading>
</VStack>
</Center>
</CardHeader>
  <CardBody>
  <VStack spacing={`1.5em`}>
  <Text>
  {`Nuestros servicios de Estimación Objetiva, Contabilidad Mecanizada y Estimación Directa/Simplificada 
                                están diseñados para liberarlo de la complejidad financiera. Nos encargamos de todos los detalles, desde registros
                                de compras y gastos hasta informes detallados de IVA y cuentas de resultados. Con nosotros, su empresa estará en manos
                                expertas, permitiéndole enfocarse en lo que hace mejor: hacer crecer su negocio.`}
</Text>
  <Fragment>
  <Button size={`lg`} sx={{"fontFamily": "Poppins", "fontSize": "1em", "bg": "#00672D", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Contacta con uno de nuestros profesionales`}
</Button>
</Fragment>
</VStack>
</CardBody>
</Card>
  <Card size={`lg`} sx={{"bg": "#A8CE6B"}}>
  <CardHeader>
  <Center>
  <VStack>
  <InfoIcon sx={{"fontSize": "2em"}}/>
  <Heading size={`lg`}>
  {`Servicio Jurídico`}
</Heading>
</VStack>
</Center>
</CardHeader>
  <CardBody>
  <VStack spacing={`1.5em`}>
  <Text>
  {`Ofrecemos un asesoramiento legal completo para nuestros clientes.
                                Desde sucesiones y donaciones hasta contratos y arrendamientos, nos encargamos de todos los aspectos legales.
                                Además, proporcionamos orientación experta en recursos y asuntos relacionados con empleadas de hogar. Con nuestro 
                                equipo legal a su lado, puede estar seguro de que sus intereses están protegidos en cada paso del camino.`}
</Text>
  <Fragment>
  <Button size={`lg`} sx={{"fontFamily": "Poppins", "fontSize": "1em", "bg": "#00672D", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Contacta con uno de nuestros profesionales`}
</Button>
</Fragment>
</VStack>
</CardBody>
</Card>
</HStack>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`JOFER | Excelencia en asesoría para tu empresa`}
</title>
  <meta content={`Con más de cuatro décadas de experiencia somos líderes provinciales en servicios para pequeñas y medianas empresas.`} name={`description`}/>
  <meta content={`logo.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
