import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'

const url = process.env.SITE_URL || 'https://www.nextshow.com.br'

export const layout = {
  title:
    'NeXTIME | Maximize seu tempo com tecnologia e torne-se a mudança que deseja ver no mundo.',
  url,
  description:
    'Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos.',
  keywords: [
    'site responsivo',
    'site personalizado',
    'site alto padrão',
    'programador de sites',
    'empresas de sites',
    'elaboração de sites',
    'designer para fazer site',
    'design system',
    'desenvolver ecommerce',
    'desenvolver aplicativos',
  ],
  siteName: 'NeXTIME',
  socialTitle:
    'NeXTIME | Maximize seu tempo com tecnologia e torne-se a mudança que deseja ver no mundo.',
  socialImageUrl: `${url}/images/image_page.jpg`,
  nextSocialNetwork:
    'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20NeXTIME!%0AGostaria%20de%20solicitar%20um%20orçamento..',
  logoSrc: '/images/logos/logo_nextime.svg',
  logoWidth: 146,
  logoHeight: 45,
  logoAlt: 'NeXTIME Logo',
  logoSubtitle: undefined,
  bg: 'next-dark',
  logoSubtitleColor: 'next-primary',
}

export const nextHeroItem = {
  words: 'TECNOLOGIA | DESIGN | MARKETING',
  title: 'Transforme suas ideias em negócios de sucesso',
  text: 'Tenha nosso time ao seu lado para fazer seus planos virarem realidade. Foque onde precisa enquanto nossos especialistas cuidam de tudo para o seu negócio evoluir como você sempre quis.',
  textButton: 'Quero revolucionar minha empresa',
  url: layout.nextSocialNetwork,
}

export const nextCallToActionItems = [
  {
    id: 'app',
    title: 'Crie seu próprio app e multiplique suas vendas',
    text: 'Na NeXTIME, temos a solução completa para você se conectar com quem mais importa: seus clientes. Faça todo mundo levar sua empresa na palma da mão e ter acesso ao melhor que você oferece com poucos cliques.',
    image: '/images/home/tattoo_pop.png',
    textButton: 'Quero meu próprio app',
    url: layout.nextSocialNetwork,
    width: 600,
    height: 630,
    directionMd: 'row-reverse',
  },
  {
    id: 'site',
    title: 'Tenha um site inovador e veja sua empresa decolar',
    text: 'Conte com nossos especialistas NeXTIME para criar tudo utilizando as ferramentas mais modernas. Desenvolvemos páginas otimizadas que carregam em poucas frações de segundo e não te fazem perder clientes.',
    textButton: 'Quero meu site mais moderno',
    url: layout.nextSocialNetwork,
    width: 595,
    height: 528,
    image: '/images/home/optar.png',
  },
  {
    id: 'marketing',
    title: 'Faça sua empresa ser vista e conquiste fãs para sua marca',
    text: 'Tenha a ajuda dos experts NeXTIME para criar campanhas completas para sua marca. Esteja presente em todas as plataformas e redes sociais para ganhar uma legião de clientes.',
    image: '/images/home/instagram.png',
    url: layout.nextSocialNetwork,
    width: 450,
    height: 480,
    textButton: 'Quero que minha empresa seja vista',
    directionMd: 'row-reverse',
  },
] as unknown as Array<NextCallToActionProps>

export const nextFeatureItems = [
  {
    title: 'Tecnologia',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
  {
    title: 'Design',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
  {
    title: 'Apps',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
  {
    title: 'Sites Otimizados',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
  {
    title: 'Inteligência Artificial',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
  {
    title: 'Marketing',
    text: 'Usamos o que há de melhor no mercado, entregando soluções modernas. Adicionamos tecnologias de inteligência Artificial e estratégias analíticas para o seu negócio.',
    icon: '',
  },
] as unknown as Array<NextFeatureProps>

export const nextTechnologyItems = [
  {
    image: '/images/logos/flutter.svg',
    width: 51,
    height: 64,
  },
  {
    image: '/images/logos/nextjs.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/vercel.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/nodejs.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/nestjs.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/firebase.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/amp.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/bootstrap.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/tailwind.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/chakra.svg',
    width: 64,
    height: 64,
  },
  {
    image: '/images/logos/stripe.svg',
    width: 64,
    height: 64,
  },
]

export const nextTeamItems = [
  {
    name: 'Pedro Duarte',
    role: 'CEO (Chief Executive Officer)',
    text: 'Sabe o que eu adoro na minha vida? Eu sei qual é o meu PORQUÊ. Procuro me levantar todo dia para fazer alguma coisa que pode devolver às pessoas o seu bem precioso, o TEMPO. Acredito que pensando diferente conseguimos utilizar esse recurso finito de uma melhor forma. O mais interessante é que temos diferentes maneiras para conseguir devolver o tempo as pessoas e uma delas é utilizarmos a tecnologia. Por isso sou Bacharel em Ciência da Computação pela Universidade Federal de Ouro Preto — UFOP. Fui presidente da empresa júnior Voluta Soluções Digitais — UFOP. Presidente do Centro Acadêmico do Curso de Ciência da Computação — UFOP gestão 2013/14. Professor pelo programa PRONATEC e pela Let’s Code, escola de programação. Especialista AMP Cognizant/Google e desenvolvedor front-end na Toro Investimentos. Tenho muita sorte de ter trabalhado em lugares que me ajudaram e me ajudam nesse porquê.',
    avatar: '/images/home/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/phdduarte/',
    instagram: 'https://www.instagram.com/phdduarte/',
    youtube: 'https://www.youtube.com/watch?v=-TqTAxrOxaM',
  },
  {
    name: 'Daniel Rodrigues',
    role: 'CPO (Chief Product Officer)',
    text: "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar: '/images/home/team/daniel.svg',
    linkedin: 'https://www.linkedin.com/in/daniel-rodrigues-5a6007121/',
    instagram: 'https://www.instagram.com/danielkeoma/',
  },
  {
    name: 'Priscilla',
    role: 'Movie star',
    text: "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar: '/images/home/team/daniel.svg',
  },
  {
    name: 'Luiz',
    role: 'Musician',
    text: 'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar: '/images/home/team/bruna.svg',
  },
] as unknown as Array<Record<string, string>>
