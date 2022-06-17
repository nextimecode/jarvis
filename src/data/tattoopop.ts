import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'
import { NavItem } from 'components/organisms/nextHeader'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home'
  },
  {
    label: 'Benefícios',
    href: '#site'
  },
  {
    label: 'Mentor',
    href: '#marketing'
  },
  {
    label: 'Preço',
    href: '#investimento'
  }
]

export const nextSocialNetwork =
  'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0AGostaria%20de%20participar%20da%20mentoria.'

export const nextHeroItem = {
  title: 'De onde vem essa sua vontade de pintar a pele?',
  text: 'A tatuagem é uma prática que vem da antiguidade: seus primeiros registros datam de 400 a.C. no Egito, mas a arte na pele se perpetuou e acontece até os dias de hoje. Descubra. Conheça. Escolha. Conecte-se. No Tattoo Pop você encontra o tatuador ideal para eternizar na pele a arte perfeita para você e pode, também, divulgar o seu trabalho enquanto artista.',
  width: 282,
  height: 482,
  image: '/images/tattoopop/celular.png',
  textButton: 'Começar agora',
  url: '#investimento'
}

export const nextCallToActionItems = [
  {
    id: 'app',
    title: 'Encontre os melhores tatuadores',
    text: 'Tatuagem realista, traço pontilhado, old school… aqui tem tatuador para tudo quanto é jeito e gosto! No Tattoo Pop você consegue encontrar diversos tatuadores do estilo que você mais gosta de forma rápida, simples e de acordo com suas preferências.',
    image: '/images/tattoopop/circulo.png',
    textButton: 'Começar agora',
    url: '#investimento',
    width: 396,
    height: 396,
    directionMd: 'row-reverse'
  },
  {
    id: 'site',
    title: 'Divulgue seu trabalho',
    text: 'Expandir os horizontes e aumentar o alcance é o desejo de todo artista. Que tal divulgar suas artes no Tattoo Pop? Aqui seu trabalho fica disponível para milhares de pessoas que têm a tatuagem como arte preferida. Não perca essa chance, compartilhe seu trabalho conosco e aumente sua clientela!',
    textButton: 'Começar agora',
    url: '#investimento',
    width: 433,
    height: 433,
    image: '/images/tattoopop/circulo2.png'
  },
  {
    id: 'marketing',
    title: 'Quem será meu mentor?',
    text: '"Funcionalidade',
    image: '/images/tattoopop/celular2.png',
    url: '#investimento',
    width: 364,
    height: 621,
    textButton: 'Começar agora',
    directionMd: 'row-reverse'
  }
] as unknown as Array<NextCallToActionProps>

export const nextFeatureItems = [
  {
    title: 'Tecnologia',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Design',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Apps',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Sites Otimizados',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Inteligência Artificial',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  },
  {
    title: 'Marketing',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: ''
  }
] as unknown as Array<NextFeatureProps>

export const nextTechnologyItems = [
  {
    image: '/images/logos/nextjs.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/vercel.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/firebase.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/amp.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/bootstrap.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/tailwind.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/chakra.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/stripe.svg',
    width: 64,
    height: 64
  }
]

export const videos = [
  {
    image: '/images/logos/nextjs.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/vercel.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/firebase.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/amp.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/bootstrap.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/tailwind.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/chakra.svg',
    width: 64,
    height: 64
  },
  {
    image: '/images/logos/stripe.svg',
    width: 64,
    height: 64
  }
]

export const nextTeamItems = [
  {
    name: 'Pedro Duarte',
    role: 'CEO (Chief Executive Officer)',
    text: 'Sabe o que eu adoro na minha vida? Eu sei qual é o meu PORQUÊ. Procuro me levantar todo dia para fazer alguma coisa que pode devolver às pessoas o seu bem precioso, o TEMPO. Acredito que pensando diferente conseguimos utilizar esse recurso finito de uma melhor forma. O mais interessante é que temos diferentes maneiras para conseguir devolver o tempo as pessoas e uma delas é utilizarmos a tecnologia. Por isso sou Bacharel em Ciência da Computação pela Universidade Federal de Ouro Preto — UFOP. Fui presidente da empresa júnior Voluta Soluções Digitais — UFOP. Presidente do Centro Acadêmico do Curso de Ciência da Computação — UFOP gestão 2013/14. Professor pelo programa PRONATEC e pela Let’s Code, escola de programação. Especialista AMP Cognizant/Google e desenvolvedor front-end na Toro Investimentos. Tenho muita sorte de ter trabalhado em lugares que me ajudaram e me ajudam nesse porquê.',
    avatar: '/images/illustrations/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/phdduarte/',
    instagram: 'https://www.instagram.com/phdduarte/',
    youtube: 'https://www.youtube.com/watch?v=-TqTAxrOxaM'
  },
  {
    name: 'Daniel Rodrigues',
    role: 'CPO (Chief Product Officer)',
    text: "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar: '/images/illustrations/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/daniel-rodrigues-5a6007121/',
    instagram: 'https://www.instagram.com/danielkeoma/'
  },
  {
    name: 'Priscilla',
    role: 'Movie star',
    text: "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar: '/images/illustrations/team/daniel.svg'
  },
  {
    name: 'Luiz',
    role: 'Musician',
    text: 'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar: '/images/illustrations/team/bruna.svg'
  }
] as unknown as Array<Record<string, string>>
