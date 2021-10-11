
import React from 'react'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

const NextTemplateHome = () => {
  return (
    <NextLayout>
      <NextHero />
      <NextFeatures />
    </NextLayout>
  )
}

export default NextTemplateHome
