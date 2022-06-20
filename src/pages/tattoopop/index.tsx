import NextTemplateTattoo from '../../components/templates/nextTemplateTattoo'
import {
  nextHeroItem,
  nextFeatureItems,
  nextCallToActionItems,
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
    />
  )
}

export default TattooPop
