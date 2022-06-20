import React from 'react'
import { Container, VStack, Text, Box } from '@chakra-ui/react'
import NextLayout from 'components/templates/nextLayout'

const Politicas = () => {
  return (
    <NextLayout>
      <Container maxW={'container.lg'}>
        <Box>
          <Text pb={6} as="h2" fontSize={'3xl'}>
            Termos de uso
          </Text>
          <VStack pb={4} spacing="2" alignItems="flex-start">
            <Text as="p" fontSize="lg">
              Bem-vindo ao website optarrh.com.br , o presente documento “termo de uso” estabelece
              os termos e condições aplicáveis aos nossos serviços, por gentileza, revise
              cuidadosamente antes de começar a sua utilização, todos usuários e visitantes declaram
              aceitar os termos e condições contidos neste termo, caso você não concorde com os
              termos e condições contidos por favor não utiliza o site.
            </Text>
          </VStack>
        </Box>
      </Container>
    </NextLayout>
  )
}

export default Politicas
