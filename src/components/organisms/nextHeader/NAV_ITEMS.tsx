import { layout } from '../../../data'
import { NavItem } from '.'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '#',
    children: [
      {
        label: 'NextShow',
        subLabel: 'Game dos realities shows.',
        target: '_blank',
        href: 'https://nextshow.com.br/',
      },
      {
        label: 'NextBolao',
        subLabel: 'Crie seu próprio bolão e compartilhe entre amigos!',
        target: '_blank',
        href: 'https://bolao.nextime.com.br/',
      },
      {
        label: 'TattooPop',
        subLabel: 'Encontre os melhores tatuadores.',
        href: '/tattoopop',
      },
      {
        label: 'Ei Milhas',
        subLabel: 'Encontre sua passagem ideal.',
        href: 'https://www.eimilhas.com.br/',
      },
      {
        label: 'OptarRh',
        subLabel: 'Solução para RH.',
        target: '_blank',
        href: 'https://app.optarrh.com.br/',
      },
      {
        label: 'Bora Pro Giro',
        subLabel: 'Preservando a cultura, projetamos o futuro.',
        href: 'https://www.boraprogiro.com.br/',
      },
      {
        label: 'Atriz Cynthia Senek',
        subLabel: 'Mentoria artística de autoconhecimento.',
        href: 'https://www.cynthonizar.com/',
      },
      {
        label: 'Circuito Cidades',
        subLabel:
          'O Circuito Cidades é um evento esportivo de cooperação intermunicipal.',
        href: 'https://www.circuitocidades.com.br/',
      },
      {
        label: 'Allan Kardec',
        subLabel: 'Museu Online do Espiritismo.',
        href: 'https://www.allankardec.online/',
      },
      {
        label: 'Treino Vini Dias',
        subLabel: 'Ganhe massa e perca peso fácil a jato.',
        href: 'https://www.treinovinidias.com/',
      },
      {
        label: 'Odonto S.O.S',
        subLabel: 'Urgências odontológicas.',
        href: 'https://www.odontosos.com.br/',
      },
      {
        label: 'Dr. Danilo Antunes',
        subLabel: 'Clínica odontológica.',
        href: 'https://www.daniloantunesimplantes.com.br/',
      },
    ],
  },
  {
    label: 'Mentor',
    href: '/mentor',
  },
  {
    label: 'Orçamento',
    href: layout.nextSocialNetwork,
  },
  {
    label: 'News',
    href: '/news',
  },
]
