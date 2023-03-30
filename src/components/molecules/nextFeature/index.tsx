import { Flex, Text, Stack } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Image from 'next/image'

export interface NextFeatureProps {
  title?: string
  text?: string
  image?: string
  icon?: ReactElement
  width?: number
  height?: number
}

const NextFeature = ({
  title,
  text,
  image,
  icon,
  width = 64,
  height = 64,
}: NextFeatureProps) => {
  return (
    <Stack spacing={4} align="start">
      {icon && (
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}
        >
          {icon}
        </Flex>
      )}
      {image && (
        <Image alt={String(title)} src={image} width={width} height={height} />
      )}
      {title && <Text fontWeight={600}>{title}</Text>}
      {text && <Text color={'next-blue.100'}>{text}</Text>}
    </Stack>
  )
}

export default NextFeature
