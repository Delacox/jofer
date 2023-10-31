import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Divider, Flex, Heading, HStack, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
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
  <Image src={`nosotros.jpg`} sx={{"width": "100%", "height": "auto"}}/>
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
  <Center sx={{"width": "100%"}}>
  <Link as={``} sx={{"textDecoration": "none", "_hover": {"color": "#6AAD3B"}}}>
  <Fragment>
  <Button size={`lg`} sx={{"fontSize": "1em", "bg": "#6AAD3B", "color": "#F0F0F0", "marginTop": "1.5em", "_hover": {"bg": "#202020"}}}>
  {`Solicitar ahora`}
</Button>
</Fragment>
</Link>
</Center>
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
