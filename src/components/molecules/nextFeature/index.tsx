import {
  Flex,
  Text,
  Stack
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'

export interface NextFeatureProps {
  title: string;
  text: string;
  icon?: ReactElement;
}

const NextFeature = ({
  title,
  text,
  icon
}: NextFeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default NextFeature
