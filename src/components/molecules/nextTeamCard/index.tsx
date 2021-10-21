import {
  Text,
  Stack
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
  width = 64,
  height = 64
}: NextTeamCardProps) => {
  return (
    <Stack>
      <Image
        alt={name}
        src={avatar}
        width={width}
        height={height}
      />
      <Text fontWeight={600}>{name}</Text>
      <Text color={'gray.600'}>{role}</Text>
      <Text color={'gray.600'}>{content}</Text>
    </Stack>
  )
}

export default NextTeamCard
