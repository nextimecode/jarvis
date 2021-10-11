
import React from 'react'
import { NextFeatureProps } from '../components/molecules/nextFeature'
import NextTemplateHome from '../components/templates/nextTemplateHome'

const nextFeatureItems = [{
  title: 'Tecnologia',
  text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
  icon: ''
}] as unknown as Array<NextFeatureProps>

const NextHome = () => {
  return (
    <NextTemplateHome items={nextFeatureItems} />
  )
}

export default NextHome
