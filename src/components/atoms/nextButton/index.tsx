import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | undefined
  textColor?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  hover?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  isFullWidth?: boolean
}

const NextButton = ({
  bg,
  children,
  variant = 'solid',
  textColor = 'next-primary',
  hover = 'next-dark',
  isFullWidth = false
}: PropsWithChildren<Props>) => {
  if (variant === 'solid') {
    bg = 'next-primary'
    textColor = 'white'
    hover = 'next-dark'
  }
  return (
    <>
      <Button
        bg={bg}
        textColor={textColor}
        borderColor="next-primary"
        variant={variant}
        height="45px"
        isFullWidth={isFullWidth}
        _hover={{
          background: hover,
          color: 'white',
          borderColor: 'next-dark'
        }}
      >
        { children }
      </Button>
    </>
  )
}

export default NextButton
