import React from 'react'
import {
  Box,
  SimpleGrid,
  Container,
  Center,
  Heading
} from '@chakra-ui/react'
import NextFeature, { NextFeatureProps } from '../../molecules/nextFeature'

export interface NextFeaturesProps {
  items: Array<NextFeatureProps>
  numberGrid?: number
}

const NextFeatures = ({
  items,
  numberGrid = 3
}: NextFeaturesProps) => {
  return (
    <Container maxW="container.lg" pb={[32, 32]}>
      <Center pb={12}>
        <Heading>
          Usamos as melhores tecnologias do mercado
        </Heading>
      </Center>
      <Box p={4}>
        <SimpleGrid columns={{ base: 3, md: numberGrid }} spacing={10}>
          {items?.map((item, index) => (
            <NextFeature
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default NextFeatures
