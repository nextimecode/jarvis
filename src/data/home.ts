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

export { nextTechnologyItems, nextCallToActionItems, nextFeatureItems }
