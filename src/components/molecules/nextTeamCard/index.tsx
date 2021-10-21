import {
  Text,
  Stack,
  Box
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

export interface NextTeamCardProps {
  name: string
  role: string
  content: string
  avatar: string
  width?: number
  height?: number
}

const NextTeamCard = ({
  name,
  role,
  content,
  avatar,
  width = 86,
  height = 86
}: NextTeamCardProps) => {
  return (
    <Box
      maxW={'241px'}
      bg={'dark-gray'}
      rounded={'md'}
      borderColor="primary"
      borderWidth="1px"
      p={6}
    >
      <Stack
        textAlign="left"
      >
        <Image
          alt={name}
          src={avatar}
          width={width}
          height={height}
        />
        <Text
          fontSize="xl"
          fontWeight={600}
        >
          {name}
        </Text>
        <Text color={'gray.200'}>{role}</Text>
      </Stack>
    </Box>
  )
}

export default NextTeamCard
