import { NextCallToActionProps } from '../components/organisms/nextCallToAction'
import { NextFeatureProps } from '../components/molecules/nextFeature'

export const nextSocialNetwork = (numberPhone = '5511972436305') => {
  return {
    url: `https://api.whatsapp.com/send?phone=${numberPhone}&text=Ol%C3%A1,%20NeXTIME!%0AGostaria%20de%20participar%20da%20mentoria.`
  }
}

export const nextHeroItem = {
  title: 'O que é mentoria?',
  text: 'Mentoria é uma forma de capacitar pessoas por meio do aprendizado com alguém mais experiente na área. O mentor é, geralmente, um profissional com perfil sênior na função ou em algum tema específico, enquanto o mentorado é um iniciante. \n\n O mentor atua como um professor, não apenas para ensinar habilidades técnicas, mas também para ensinar habilidades comportamentais e ajudar no desenvolvimento da carreira do profissional. ',
  image: '/images/illustrations/undraw_social_friends_re_7uaa.svg',
  textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
  url: '#investimento'
}

export const nextCallToActionItems = [
  {
    id: 'app',
    title: 'Mentoria e coaching: diferença',
    text: 'O mentor é alguém experiente em determinado campo de atuação. Ele faz um aconselhamento profissional para o mentorado, ensina questões técnicas sobre a realização do trabalho, dá dicas de carreira e busca a capacitação do profissional. \n\n O coach, por sua vez, trabalha os aspectos motivacionais das pessoas. Ele busca incentivar o indivíduo a dar o melhor naquilo que faz, mas não possui, necessariamente, experiência no campo de atuação do cliente. Portanto, não cabe a ele oferecer treinamento técnico ou capacitação profissional.',
    image: '/images/illustrations/undraw_youtube_tutorial_re_69qc.svg',
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    url: '#investimento',
    width: 600,
    height: 630,
    directionMd: 'row-reverse'
  },
  {
    id: 'site',
    title: 'Benefícios da mentoria',
    text: '- Diminui a curva de aprendizagem\n\n- Permite aprender com os erros dos mais experientes\n\n- Ajuda no desenvolvimento pessoal\n\n- Agrega conhecimento de quem realmente sabe\n\n- Ajuda na capacitação a longo prazo \n\n- Gera um processo de aprendizagem adaptativa.',
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
    url: '#investimento',
    width: 595,
    height: 528,
    image: '/images/illustrations/undraw_personal_file_re_5joy.svg'
  },
  {
    id: 'marketing',
    title: 'Quem será meu mentor?',
    text: '"Você sabe o que eu amo na minha vida? Eu sei qual é o meu PORQUÊ.\nTento levantar todos os dias para fazer algo que possa devolver às pessoas o seu bem mais precioso, o TEMPO. Acredito que pensando diferente podemos usar melhor esse recurso finito.\nO mais interessante é que temos diferentes formas de poder devolver o tempo às pessoas e uma delas é usar a tecnologia.\nPor isso sou Bacharel em Ciência da Computação pela Universidade Federal de Ouro Preto - UFOP. Fui presidente da empresa júnior Voluta Soluções Digitais - UFOP. Presidente do Centro Acadêmico do Curso de Ciência da Computação - UFOP 2013/14. Professor pelo programa PRONATEC e pela Let’s Code, escola de programação. Especialista em AMP Cognizant/Google e atualmente desenvolvedor FrontEnd. Tenho muita sorte de ter trabalhado em lugares que me ajudaram e me ajudam no meu porquê." - Pedro Duarte CEO NeXTIME',
    image: '/images/illustrations/eu2.jpeg',
    url: '#investimento',
    width: 684,
    height: 912,
    textButton: 'SIM! QUERO PARTICIPAR DA MENTORIA',
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
