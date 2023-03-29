import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'next-primary' | 'next-dark' | 'next-green' | 'white' | 'dark' | undefined
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | undefined
  textColor?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  hover?: 'next-primary' | 'next-dark' | 'next-dark-gray' | 'white' | 'dark' | undefined
}

export const NextButton = ({
  bg,
  children,
  variant = 'solid',
  textColor = 'next-primary',
  hover = 'next-dark'
}: PropsWithChildren<Props>) => {
  if (variant === 'solid') {
    bg = 'next-dark'
    textColor = 'white'
    hover = 'next-dark-gray'
  }
  return (
    <Button
      bg={bg}
      textColor={textColor}
      borderColor="next-primary"
      variant={variant}
      height="45px"
      _hover={{
        background: hover,
        color: 'white',
        borderColor: 'next-dark'
      }}
    >
      {children}
    </Button>
  )
}
