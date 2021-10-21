
import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextTeam from '../../organisms/nextTeam'
import NextTestimonials from '../../organisms/nextTestimonials'
import NextLayout from '../nextLayout'

export interface NextTemplateHomeProps {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
      <NextFeatures items={nextFeatureItems} />
      {nextCallToActionItems?.map((item, index) => (
        <NextCallToAction
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
          textButton={item.textButton}
          directionMd={item.directionMd}
        />
      ))}
      <Center mt={20}>
        <Heading>
          Tecnologias de ponta
        </Heading>
      </Center>
      <NextFeatures
        items={nextTechnologyItems}
        numberGrid={6}
      />
      <Center mt={20}>
        <Heading>
          O que os clientes falam
        </Heading>
      </Center>
      <NextTestimonials />
      <Center mt={20}>
        <Heading>
          Feito por Pessoas
        </Heading>
      </Center>
      <NextTeam items={nextTeamItems}/>
    </NextLayout>
  )
}

export default NextTemplateHome
