import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

import sushi from '../../assets/images/sushi.jpg'
import pizza from '../../assets/images/pizza.jpg'
import burger from '../../assets/images/burger.jpg'
import pasta from '../../assets/images/pasta.jpg'
import doces from '../../assets/images/doces.jpg'
import acai from '../../assets/images/acai.jpg'

type Restaurant = {
  id: number
  title: string
  description: string
  image: string
  category: string
  rating: number
}

const RestaurantsList = () => {
  const restaurants: Restaurant[] = [
    {
      id: 1,
      title: 'Hioki Sushi',
      description: 'Peça já o melhor da culinária japonesa no conforto da sua casa!',
      image: sushi,
      category: 'Japonesa',
      rating: 4.9
    },
    {
      id: 2,
      title: 'La Dolce Vita Trattoria',
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você.',
      image: pizza,
      category: 'Italiana',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Burger Grill',
      description: 'Hambúrgueres artesanais preparados com ingredientes frescos.',
      image: burger,
      category: 'Hambúrguer',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Pasta Itália',
      description: 'Massas italianas tradicionais feitas com receitas clássicas.',
      image: pasta,
      category: 'Italiana',
      rating: 4.5
    },
    {
      id: 5,
      title: 'Doces & Cia',
      description: 'Sobremesas deliciosas e bolos especiais.',
      image: doces,
      category: 'Doces',
      rating: 4.8
    },
    {
      id: 6,
      title: 'Açaí Top',
      description: 'O melhor açaí da cidade com toppings variados.',
      image: acai,
      category: 'Açaí',
      rating: 4.9
    }
  ]

  return (
    <Container>
      <List>
        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </List>
    </Container>
  )
}

export default RestaurantsList