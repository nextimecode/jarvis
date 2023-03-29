import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { layout } from '../../../data'

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
  bg?: string
}

export function NextFooter({ bg = 'next-dark' }: NextFooterProps) {
  return (
    <footer>
      <Box bg={bg} pt={12} pb={12}>
        <Grid templateColumns="repeat(5, 2fr)">
          <GridItem colSpan={[1, 3]}>
            <Container maxW="2xl">
              <Box>
                <Heading fontWeight={600}>Fale com a gente:</Heading>
                <HStack spacing={6} pt={4} pb={10}>
                  <Link
                    href={
                      'mailto:contato@nextime.com.br?subject=Orçamento para NeXTIME&body=Olá,%20NeXTIME'
                    }
                    target={'_blank'}
                  >
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaMailBulk}
                      w={16}
                      h={16}
                    />
                  </Link>
                  <Link href={layout.nextSocialNetwork} target={'_blank'}>
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaWhatsapp}
                      w={16}
                      h={16}
                    />
                  </Link>
                  <Link href={'https://m.me/102621504903865'} target={'_blank'}>
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaFacebookMessenger}
                      w={16}
                      h={16}
                    />
                  </Link>
                  <Link href={'https://www.instagram.com/nextimetec/'} target={'_blank'}>
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaInstagram}
                      w={16}
                      h={16}
                    />
                  </Link>
                </HStack>
                <Heading fontWeight={600}>Serviços</Heading>
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
                  <Link href={'https://www.linkedin.com/company/nextimetec/'} target={'_blank'}>
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaLinkedinIn}
                      w={8}
                      h={8}
                    />
                  </Link>
                  <Link href={'https://www.youtube.com/watch?v=-TqTAxrOxaM'} target={'_blank'}>
                    <Icon
                      color="white"
                      _hover={{ color: 'next-dark' }}
                      as={FaYoutube}
                      w={8}
                      h={8}
                    />
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
