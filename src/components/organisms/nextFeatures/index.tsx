import React from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Container
} from '@chakra-ui/react'
import NextFeature, { NextFeatureProps } from '../../molecules/nextFeature'
import { FaCloud } from 'react-icons/fa'

export interface NextFeaturesProps {
  items: Array<NextFeatureProps>
  numberGrid?: number
}

const NextFeatures = ({
  items,
  numberGrid = 3
}: NextFeaturesProps) => {
  return (
    <Container maxW="container.lg">
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: numberGrid }} spacing={10}>
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
