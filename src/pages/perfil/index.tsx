import Modal from '../../components/Modal'
import RestaurantBanner from '../../components/RestaurantBanner'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    image: '/images/combosushi.png'
  },
  {
    id: 2,
    title: 'Sashimi',
    description: 'Fatias frescas de peixe',
    image: '/images/sashimi.png'
  },
  {
    id: 3,
    title: 'Temaki',
    description: 'Cone de sushi com recheio',
    image: '/images/temaki.png'
  },
  {
    id: 4,
    title: 'Hot Roll',
    description: 'Sushi empanado',
    image: '/images/hotroll.png'
  },
  {
    id: 5,
    title: 'Uramaki',
    description: 'Arroz por fora',
    image: '/images/uramaki.png'
  },
  {
    id: 6,
    title: 'Nigiri',
    description: 'Arroz com peixe',
    image: '/images/nigiri.png'
  }
]
},
    {
      id: 2,
      title: 'La Dolce Vita Trattoria',
      category: 'Italiana',
      banner: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
      produtos: [
  {
    id: 1,
    title: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela e manjericão',
    image: '/images/pizza-margherita.jpg'
  },
  {
    id: 2,
    title: 'Pizza Calabresa',
    description: 'Calabresa com cebola e queijo',
    image: '/images/pizza-calabresa.jpg'
  },
  {
    id: 3,
    title: 'Pizza Frango',
    description: 'Frango com catupiry',
    image: '/images/pizza-frango.jpg'
  },
  {
    id: 4,
    title: 'Pizza Portuguesa',
    description: 'Presunto, ovo e cebola',
    image: '/images/pizza-portuguesa.jpg'
  },
  {
    id: 5,
    title: 'Quatro Queijos',
    description: 'Mix de queijos especiais',
    image: '/images/pizza-quatro-queijos.jpg'
  },
  {
    id: 6,
    title: 'Pizza Pepperoni',
    description: 'Pepperoni com queijo',
    image: '/images/pizza-pepperoni.png'
  }
]
    },
    {
      id: 3,
      title: 'Burger Grill',
      category: 'Hambúrguer',
      banner: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      produtos: [
  {
    id: 1,
    title: 'Burger Bacon',
    description: 'Hambúrguer com bacon e queijo',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 2,
    title: 'Cheeseburger',
    description: 'Clássico com queijo',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 3,
    title: 'Duplo Burger',
    description: 'Dois hambúrgueres suculentos',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b'
  },
  {
    id: 4,
    title: 'Burger BBQ',
    description: 'Molho barbecue especial',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086'
  },
  {
    id: 5,
    title: 'Burger Frango',
    description: 'Frango crocante',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086'
  },
  {
    id: 6,
    title: 'Burger Vegano',
    description: 'Opção sem carne',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
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
      image: '/images/pasta-espaguete.jpg'
    },
    {
      id: 2,
      title: 'Lasanha',
      description: 'Clássica italiana',
      image: '/images/pasta-lasanha.jpg'
    },
    {
      id: 3,
      title: 'Fettuccine',
      description: 'Com molho branco',
      image: '/images/pasta-fettuccine.jpg'
    },
    {
      id: 4,
      title: 'Ravioli',
      description: 'Recheado com queijo',
      image: '/images/pasta-ravioli.jpg'
    },
    {
      id: 5,
      title: 'Penne',
      description: 'Molho especial da casa',
      image: '/images/pasta-penne.jpg'
    },
    {
      id: 6,
      title: 'Carbonara',
      description: 'Molho cremoso com bacon',
      image: '/images/pasta-carbonara.jpg'
    }
  ]
},
    {
      id: 5,
      title: 'Doces & Cia',
      category: 'Doces',
      banner: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
      produtos: [
  {
    id: 1,
    title: 'Bolo de chocolate',
    description: 'Cremoso e delicioso',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
  },
  {
    id: 2,
    title: 'Cupcake',
    description: 'Mini bolo decorado',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce'
  },
  {
    id: 3,
    title: 'Donuts',
    description: 'Cobertura doce',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b'
  },
  {
    id: 4,
    title: 'Brownie',
    description: 'Chocolate intenso',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
  },
  {
    id: 5,
    title: 'Torta',
    description: 'Recheio especial',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e'
  },
  {
    id: 6,
    title: 'Macaron',
    description: 'Doce francês',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b'
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
  image: '/images/acai-granola.jpg'
},
{
  id: 2,
  title: 'Açaí com Frutas',
  description: 'Açaí com banana, morango e kiwi',
  image: '/images/acai-frutas.jpg'
},
{
  id: 3,
  title: 'Açaí Fitness',
  description: 'Açaí com whey e banana',
  image: '/images/acai-fitness.jpg'
},
{
  id: 4,
  title: 'Açaí Completo',
  description: 'Açaí com frutas, granola e leite condensado',
  image: '/images/acai-completo.jpg'
},
{
  id: 5,
  title: 'Açaí com Chocolate',
  description: 'Açaí com calda de chocolate',
  image: '/images/acai-chocolate.jpg'
},
{
  id: 6,
  title: 'Açaí com Leite Condensado',
  description: 'Açaí cremoso com leite condensado',
  image: '/images/acai-leitecondensado.jpg'
}
  ]
    },

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
  <img
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