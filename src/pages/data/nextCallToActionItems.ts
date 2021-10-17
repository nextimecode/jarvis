import { NextCallToActionProps } from '../../components/organisms/nextCallToAction'

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

export default nextCallToActionItems
