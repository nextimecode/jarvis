import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'

const nextCallToActionItems = [
  {
    title: 'Transformando ideias em apps de sucesso',
    text: 'Oferecemos a solução completa para que você fique conectado com seus clientes a qualquer momento, desde a publicação do app até até a publicação.',
    image: '/images/home/tattoo_pop.png',
    textButton: '< Conheça nosso portfolio />',
    directionMd: 'row-reverse'
  },
  {
    title: 'Desenvolvimento de websites otimizados',
    text: 'Contamos com especialistas no desenvolvimento de sistemas web utilizando as ferramentas mais modernas. Criamos páginas em AMP, que são otimizadas para um carregamento simplificado e quase instantâneo.',
    image: '/images/home/tattoo_pop.png'
  },
  {
    title: 'Faça sua empresa ser vista nas redes sociais',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    image: '/images/home/instagram.png',
    directionMd: 'row-reverse'
  }
] as unknown as Array<NextCallToActionProps>

const nextFeatureItems = [
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

const nextTechnologyItems = [
  {
    title: 'Flutter',
    image: '/images/logos/flutter.svg',
    width: 51,
    height: 64
  },
  {
    title: 'Next JS',
    image: '/images/logos/nextjs.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Vercel',
    image: '/images/logos/vercel.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Node JS',
    image: '/images/logos/nodejs.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Nest JS',
    image: '/images/logos/nestjs.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Firebase',
    image: '/images/logos/firebase.svg',
    width: 64,
    height: 64
  },
  {
    title: 'AMP',
    image: '/images/logos/amp.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Bootstrap',
    image: '/images/logos/bootstrap.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Tailwind',
    image: '/images/logos/tailwind.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Chakra UI',
    image: '/images/logos/chakra.svg',
    width: 64,
    height: 64
  },
  {
    title: 'Stripe',
    image: '/images/logos/stripe.svg',
    width: 64,
    height: 64
  }
]

const nextTeamItems = [
  {
    name: 'Pedro',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      '/images/home/team/daniel.svg'
  },
  {
    name: 'Daniel',
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      '/images/home/team/daniel.svg'
  },
  {
    name: 'Priscilla',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      '/images/home/team/daniel.svg'
  },
  {
    name: 'Luiz',
    role: 'Musician',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      '/images/home/team/daniel.svg'
  }
]

export {
  nextTechnologyItems,
  nextCallToActionItems,
  nextFeatureItems,
  nextTeamItems
}
