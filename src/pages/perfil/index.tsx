import Modal from '../../components/Modal'
import RestaurantBanner from '../../components/RestaurantBanner'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import pizzaBanner from '../../assets/pizza-banner.jpg'
import burgerBanner from '../../assets/hamburguer-banner.jpg'
import docesBanner from '../../assets/doces-banner.jpg'

import {
  Container,
  List,
  Card,
  Image,
  Title,
  Description,
  Button,
  Content 
} from './styles'

type Produto = {
  id: number
  title: string
  description: string
  image: string
}

type Restaurante = {
  id: number
  title: string
  category: string
  banner: string
  produtos: Produto[]
}

const Perfil = () => {
  const params = useParams()

  // 🔥 proteção contra undefined
  const id = params.id ? Number(params.id) : null

  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null)

const restaurantes: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    banner: '/images/sushi-banner.png',

    produtos: [
      {
        id: 1,
        title: 'Combo Sushi',
        description: 'Sushi variado com sashimi',
        image: '/images/sushi.jpg'
      },
      {
        id: 2,
        title: 'Sashimi',
        description: 'Fatias frescas de peixe',
        image: '/images/sushi.jpg'
      },
      {
        id: 3,
        title: 'Temaki',
        description: 'Cone de sushi com recheio',
        image: '/images/sushi.jpg'
      },
      {
        id: 4,
        title: 'Hot Roll',
        description: 'Sushi empanado',
        image: '/images/sushi.jpg'
      },
      {
        id: 5,
        title: 'Uramaki',
        description: 'Arroz por fora',
        image: '/images/sushi.jpg'
      },
      {
        id: 6,
        title: 'Nigiri',
        description: 'Arroz com peixe',
        image: '/images/sushi.jpg'
      }
    ]
  },

  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    banner: pizzaBanner,

    produtos: [
      {
        id: 1,
        title: 'Pizza Margherita',
        description: 'Molho de tomate, mussarela e manjericão',
        image: '/images/pizza.jpg'
      },
      {
        id: 2,
        title: 'Pizza Calabresa',
        description: 'Calabresa com cebola e queijo',
        image: '/images/pizza.jpg'
      },
      {
        id: 3,
        title: 'Pizza Frango',
        description: 'Frango com catupiry',
        image: '/images/pizza.jpg'
      },
      {
        id: 4,
        title: 'Pizza Portuguesa',
        description: 'Presunto, ovo e cebola',
        image: '/images/pizza.jpg'
      },
      {
        id: 5,
        title: 'Quatro Queijos',
        description: 'Mix de queijos especiais',
        image: '/images/pizza.jpg'
      },
      {
        id: 6,
        title: 'Pizza Pepperoni',
        description: 'Pepperoni com queijo',
        image: '/images/pizza.jpg'
      }
    ]
  },

  {
    id: 3,
    title: 'Burger Grill',
    category: 'Hambúrguer',
     banner: burgerBanner,

    produtos: [
      {
        id: 1,
        title: 'Burger Bacon',
        description: 'Hambúrguer com bacon e queijo',
        image: '/images/hamburguer.jpg'
      },
      {
        id: 2,
        title: 'Cheeseburger',
        description: 'Clássico com queijo',
        image: '/images/hamburguer.jpg'
      },
      {
        id: 3,
        title: 'Duplo Burger',
        description: 'Dois hambúrgueres suculentos',
        image: '/images/hamburguer.jpg'
      },
      {
        id: 4,
        title: 'Burger BBQ',
        description: 'Molho barbecue especial',
        image: '/images/hamburguer.jpg'
      },
      {
        id: 5,
        title: 'Burger Frango',
        description: 'Frango crocante',
        image: '/images/hamburguer.jpg'
      },
      {
        id: 6,
        title: 'Burger Vegano',
        description: 'Opção sem carne',
        image: '/images/hamburguer.jpg'
      }
    ]
  },

  {
    id: 4,
    title: 'Pasta Itália',
    category: 'Italiana',
    banner: '/images/pasta-banner.jpg',

    produtos: [
      {
        id: 1,
        title: 'Espaguete',
        description: 'Massa com molho de tomate',
        image: '/images/massas.jpg'
      },
      {
        id: 2,
        title: 'Lasanha',
        description: 'Clássica italiana',
        image: '/images/massas.jpg'
      },
      {
        id: 3,
        title: 'Fettuccine',
        description: 'Com molho branco',
        image: '/images/massas.jpg'
      },
      {
        id: 4,
        title: 'Ravioli',
        description: 'Recheado com queijo',
        image: '/images/massas.jpg'
      },
      {
        id: 5,
        title: 'Penne',
        description: 'Molho especial da casa',
        image: '/images/massas.jpg'
      },
      {
        id: 6,
        title: 'Carbonara',
        description: 'Molho cremoso com bacon',
        image: '/images/massas.jpg'
      }
    ]
  },

  {
    id: 5,
    title: 'Doces & Cia',
    category: 'Doces',
    banner: docesBanner,

    produtos: [
      {
        id: 1,
        title: 'Bolo de chocolate',
        description: 'Cremoso e delicioso',
        image: '/images/sobremesa.jpg'
      },
      {
        id: 2,
        title: 'Cupcake',
        description: 'Mini bolo decorado',
        image: '/images/sobremesa.jpg'
      },
      {
        id: 3,
        title: 'Donuts',
        description: 'Cobertura doce',
        image: '/images/sobremesa.jpg'
      },
      {
        id: 4,
        title: 'Brownie',
        description: 'Chocolate intenso',
        image: '/images/sobremesa.jpg'
      },
      {
        id: 5,
        title: 'Torta',
        description: 'Recheio especial',
        image: '/images/sobremesa.jpg'
      },
      {
        id: 6,
        title: 'Macaron',
        description: 'Doce francês',
        image: '/images/sobremesa.jpg'
      }
    ]
  },

  {
    id: 6,
    title: 'Açaí do Brasil',
    category: 'Açaí',
    banner: '/images/acai-banner.jpg',

    produtos: [
      {
        id: 1,
        title: 'Açaí Tradicional',
        description: 'Açaí puro com granola',
        image: '/images/acai.jpg'
      },
      {
        id: 2,
        title: 'Açaí com Frutas',
        description: 'Açaí com banana, morango e kiwi',
        image: '/images/acai.jpg'
      },
      {
        id: 3,
        title: 'Açaí Fitness',
        description: 'Açaí com whey e banana',
        image: '/images/acai.jpg'
      },
      {
        id: 4,
        title: 'Açaí Completo',
        description: 'Açaí com frutas, granola e leite condensado',
        image: '/images/acai.jpg'
      },
      {
        id: 5,
        title: 'Açaí com Chocolate',
        description: 'Açaí com calda de chocolate',
        image: '/images/acai.jpg'
      },
      {
        id: 6,
        title: 'Açaí com Leite Condensado',
        description: 'Açaí cremoso com leite condensado',
        image: '/images/acai.jpg'
      }
    ]
  }
]


  // 🔥 busca correta
  const restaurante = restaurantes.find((r) => r.id === id)

  // 🔥 proteção extra (evita bug silencioso)
  if (!id || !restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  return (
    <>
      <ProfileHeader />

      <RestaurantBanner
        title={restaurante.title}
        category={restaurante.category}
        image={restaurante.banner}
      />

      <Container>
        <List>
          {restaurante.produtos.map((produto) => (
            <Card key={produto.id}>
  <Image
  src={produto.image}
  alt={produto.title}
  onError={(e) => {
    e.currentTarget.src = 'https://via.placeholder.com/300x160'
  }}
/>

  <Content>
    <Title>{produto.title}</Title>
    <Description>{produto.description}</Description>

    <Button onClick={() => setSelectedProduct(produto)}>
      Adicionar ao carrinho
    </Button>
  </Content>
</Card>
          ))}
        </List>

        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct?.title || ''}
          description={selectedProduct?.description || ''}
          image={selectedProduct?.image || ''}
        />
      </Container>

      <Footer />
    </>
  )
}

export default Perfil