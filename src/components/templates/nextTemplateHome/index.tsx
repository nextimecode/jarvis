
import React from 'react'
import NextButton from '../../atoms/nextButton'
import NextLayout from '../nextLayout'

type PropsNextTemplateHome = {
  title?: string
}

const NextTemplateHome = ({
  title = 'NeXTIME'
}: PropsNextTemplateHome) => {
  return (
    <NextLayout title={title}>
      <NextButton>{'<Faça um orçamento gratuito/>'}</NextButton>
      <NextButton>White</NextButton>
      <NextButton bg="primary-dark">Dark</NextButton>
    </NextLayout>
  )
}

export default NextTemplateHome
