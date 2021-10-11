
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

export interface NextTemplateHomeProps {
  items: Array<NextFeatureProps>
}

const NextTemplateHome = ({
  items
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
      <NextFeatures items={items} />
    </NextLayout>
  )
}

export default NextTemplateHome
