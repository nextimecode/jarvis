import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'primary' | 'primary-dark' | 'white' | 'dark' | undefined
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | undefined
  textColor?: 'primary' | 'primary-dark' | 'white' | 'dark' | undefined
}

const NextButton = ({
  bg,
  children,
  variant = 'solid',
  textColor = 'primary'
}: PropsWithChildren<Props>) => {
  if (variant === 'solid') {
    bg = 'primary'
    textColor = 'white'
  }
  return (
    <>
      <Button bg={bg} textColor={textColor} borderColor="primary" variant={variant}>{ children }</Button>
    </>
  )
}

export default NextButton
