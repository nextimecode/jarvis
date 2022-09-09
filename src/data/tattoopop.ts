import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'
import { NavItem } from 'components/organisms/nextHeader'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Melhores tatuadores',
    href: '#tatuadores'
  },
  {
    label: 'Divulgue seu trabalho',
    href: '#trabalho'
  },
  {
    label: 'Funcionalidades',
    href: '#funcionalidades'
  }
]

export const nextSocialNetwork =
  'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0AGostaria%20de%20participar%20da%20mentoria.'

export const nextHeroItem = {
  title: 'De onde vem essa sua vontade de pintar a pele?',
  text: 'A tatuagem é uma prática que vem da antiguidade: seus primeiros registros datam de 400 a.C. no Egito, mas a arte na pele se perpetuou e acontece até os dias de hoje. Descubra. Conheça. Escolha. Conecte-se. No Tattoo Pop você encontra o tatuador ideal para eternizar na pele a arte perfeita para você e pode, também, divulgar o seu trabalho enquanto artista.',
  width: 360,
  height: 640,
  image: '/images/tattoopop/celular02.svg',
  textButton: 'BAIXE O APLICATIVO AGORA MESMO',
  url: 'https://tattoopopprd.page.link/AaTt'
}

export const nextCallToActionItems = [
  {
    id: 'tatuadores',
    title: 'Encontre os melhores tatuadores',
    text: 'Tatuagem realista, traço pontilhado, old school… aqui tem tatuador para tudo quanto é jeito e gosto! No Tattoo Pop você consegue encontrar diversos tatuadores do estilo que você mais gosta de forma rápida, simples e de acordo com suas preferências.',
    image: '/images/tattoopop/circulo.png',
    textButton: 'BAIXE O APLICATIVO AGORA MESMO',
    url: 'https://tattoopopprd.page.link/AaTt',
    width: 396,
    height: 396,
    directionMd: 'row-reverse'
  },
  {
    id: 'trabalho',
    title: 'Divulgue seu trabalho',
    text: 'Expandir os horizontes e aumentar o alcance é o desejo de todo artista. Que tal divulgar suas artes no Tattoo Pop? Aqui seu trabalho fica disponível para milhares de pessoas que têm a tatuagem como arte preferida. Não perca essa chance, compartilhe seu trabalho conosco e aumente sua clientela!',
    textButton: 'BAIXE O APLICATIVO AGORA MESMO',
    url: 'https://tattoopopprd.page.link/AaTt',
    width: 433,
    height: 433,
    image: '/images/tattoopop/circulo2.png'
  }
] as unknown as Array<NextCallToActionProps>

export const nextFeatureItems = [
  {
    title: 'Encontre o Tatuador mais próximo',
    text: 'Já imaginou você encontrar os melhores tatuadores próximos de você? No tattoo Pop isso é possível apenas inserindo o local que deseja visualizar o artista.',
    image: '/images/tattoopop/icon_cloud.svg',
    width: 60,
    height: 50
  },
  {
    title: 'Meus artistas favoritos',
    text: 'Fácil e prático! Aqui no Tattoo você pode listar seus artistas favoritos apenas com um clique.',
    image: '/images/tattoopop/icon_cloud.svg',
    width: 60,
    height: 50
  },
  {
    title: 'Publique seu trabalho',
    text: 'Para você que é tatuador e deseja aumentar sua cartela de clientes, aqui no tattoo você vai se conectar com clientes de todo o mundo!',
    image: '/images/tattoopop/icon_cloud.svg',
    width: 60,
    height: 50
  }
] as unknown as Array<NextFeatureProps>
