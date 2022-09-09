import React from 'react'
import { Box, SimpleGrid, Container, Center, Heading } from '@chakra-ui/react'
import NextFeature, { NextFeatureProps } from '../../molecules/nextFeature'

export interface NextFeaturesProps {
  title?: string
  items: Array<NextFeatureProps>
  numberGrid?: number
  id?: string
}

const NextFeatures = ({
  id,
  items,
  numberGrid = 3,
  title = 'Usamos as melhores tecnologias do mercado'
}: NextFeaturesProps) => {
  return (
    <Container id={id} maxW="container.lg" pt={[2, 16]} pb={[16, 28]}>
      <Center pb={12}>
        <Heading>{title}</Heading>
      </Center>
      <Box p={4}>
        <SimpleGrid columns={{ base: 3, md: numberGrid }} spacing={10}>
          {items?.map((item, index) => (
            <NextFeature
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              width={item.width}
              height={item.height}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default NextFeatures
