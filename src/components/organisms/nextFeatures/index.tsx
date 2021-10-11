import React from 'react'
import {
  Box,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import NextFeature from '../../molecules/nextFeature'
import { FaCloud } from 'react-icons/fa'

const NextFeatures = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <NextFeature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'text'
          }
        />
        <NextFeature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'text'
          }
        />
        <NextFeature
          icon={<Icon as={FaCloud} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'text'
          }
        />
      </SimpleGrid>
    </Box>
  )
}

export default NextFeatures
