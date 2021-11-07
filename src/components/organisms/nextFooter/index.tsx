import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text
} from '@chakra-ui/react'

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMailBulk,
  FaYoutube,
  FaFacebookMessenger
} from 'react-icons/fa'

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

const NextFooter = ({
  bg = 'next-primary'
}: NextFooterProps) => {
  return (
    <footer>
      <Box bg={bg} pt={12} pb={12}>
        <Grid
          templateColumns="repeat(5, 2fr)"
        >
          <GridItem colSpan={[1, 3]}>
            <Container maxW="2xl">
              <Box>
                <Heading fontWeight={600}>
                  Fale com a gente:
                </Heading>
                <HStack spacing={6} pt={4} pb={10}>
                  <Link href={'mailto:contato@nextime.com.br?subject=Orçamento para NeXTIME&body=Olá,%20NeXTIME'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaMailBulk} w={16} h={16}/>
                    </a>
                  </Link>
                  <Link href={'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20NeXTIME!%0AGostaria%20de%20solicitar%20um%20orçamento.'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaWhatsapp} w={16} h={16}/>
                    </a>
                  </Link>
                  <Link href={'https://m.me/102621504903865'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaFacebookMessenger} w={16} h={16}/>
                    </a>
                  </Link>
                  <Link href={'https://www.instagram.com/nextimetec/'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaInstagram} w={16} h={16}/>
                    </a>
                  </Link>
                </HStack>
                <Heading fontWeight={600}>
                  Serviços
                </Heading>
                <SimpleGrid columns={[1, 2]} spacing={1} pt={3} pb={16}>
                  <Text>Desenvolvimento de aplicativos</Text>
                  <Text>Desenvolvimento de sites otimizados</Text>
                  <Text>Desenvolvimento de Design System</Text>
                  <Text>Design para campanhas</Text>
                  <Text>Marketing Digital</Text>
                  <Text>Inteligência Artificial</Text>
                </SimpleGrid>
                <HStack spacing={6} pt={3} pb={12}>
                  <Box pe={6} pt={2}>
                    <Image
                      src="/images/logos/nextime_logo_white.svg"
                      alt="NeXTIME Logo"
                      width={146}
                      height={46}
                    />
                  </Box>
                  <Link href={'https://www.linkedin.com/company/nextimetec/'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaLinkedinIn} w={8} h={8}/>
                    </a>
                  </Link>
                  <Link href={'https://www.youtube.com/watch?v=-TqTAxrOxaM'}>
                    <a target="_blank" rel="noreferrer">
                      <Icon color="white" _hover={{ color: 'next-dark' }} as={FaYoutube} w={8} h={8}/>
                    </a>
                  </Link>
                </HStack>
              </Box>
            </Container>
          </GridItem>
          <GridItem display={['none', 'block']} colSpan={[1, 2]}>
            <Box>
              <Image
                src="/images/logos/logo_footer.svg"
                alt="NeXTIME Logo"
                width={462}
                height={482}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </footer>
  )
}

export default NextFooter
