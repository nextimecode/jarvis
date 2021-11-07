import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | undefined
  textColor?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
}

const NextButton = ({
  bg,
  children,
  variant = 'solid',
  textColor = 'next-primary'
}: PropsWithChildren<Props>) => {
  if (variant === 'solid') {
    bg = 'next-primary'
    textColor = 'white'
  }
  return (
    <>
      <Button
        bg={bg}
        textColor={textColor}
        borderColor="primary"
        variant={variant}
        height="45px"
      >
        { children }
      </Button>
    </>
  )
}

export default NextButton
