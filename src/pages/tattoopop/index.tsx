import NextTemplateTattoo from '../../components/templates/nextTemplateTattoo'
import {
  nextHeroItem,
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems,
  nextSocialNetwork,
  NAV_ITEMS
} from '../../data/tattoopop'

const TattooPop = () => {
  return (
    <NextTemplateTattoo
      navItems={NAV_ITEMS}
      nextSocialNetwork={nextSocialNetwork}
      nextHeroItem={nextHeroItem}
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default TattooPop
