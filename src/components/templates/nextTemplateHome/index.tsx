
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction from '../../organisms/nextCallToAction'
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
      <NextCallToAction
        title="Transformando ideias em apps de sucesso"
        text="Oferecemos a solução completa para que você fique conectado com seus clientes a qualquer momento, desde a publicação do app até até a publicação." image="/images/code_hero.png"
      />
    </NextLayout>
  )
}

export default NextTemplateHome
