
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import { nextFeatureItems } from './data'

const NextHome = () => {
  return (
    <NextTemplateHome items={nextFeatureItems} />
  )
}

export default NextHome
