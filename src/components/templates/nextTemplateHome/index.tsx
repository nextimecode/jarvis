import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

export type NextTemplateHomeProps = {
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextHeroItem,
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero
        words={nextHeroItem.words}
        title={nextHeroItem.title}
        text={nextHeroItem.text}
        textButton={nextHeroItem.textButton}
        url={nextCallToActionItems[0].url}
      />
      {nextCallToActionItems?.map((item, index) => (
        <NextCallToAction
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
          textButton={item.textButton}
          directionMd={item.directionMd}
          width={item.width}
          height={item.height}
          url={item.url}
        />
      ))}
      {/* <NextFolderTime /> */}
      <NextFeatures
        items={nextTechnologyItems}
        numberGrid={6}
      />
      {/* <Center mt={20}>
        <Heading>
          O que os clientes falam
        </Heading>
      </Center> */}
      {/* <NextTestimonials /> */}
      {/* <Center mt={20}>
        <Heading>
          Feito por Pessoas
        </Heading>
      </Center> */}
      {/* <Box mb={20}>
        <NextTeam items={nextTeamItems}/>
      </Box> */}
    </NextLayout>
  )
}

export default NextTemplateHome
