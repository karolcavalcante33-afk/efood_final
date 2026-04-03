import { useNavigate } from 'react-router-dom'
import {
  Card,
  Image,
  Content,
  Title,
  Description,
  Button,
  Header,
  Rating,
  Star,
  Highlight,
  CategoryTag
} from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  category: string
  rating: number
}

const RestaurantCard = ({
  id,
  title,
  description,
  image,
  category,
  rating
}: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/perfil/${id}`)
  }

  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <Image src={image} alt={title} />

        <Highlight>Destaque da semana</Highlight>
        <CategoryTag>{category}</CategoryTag>
      </div>

      <Content>
        <Header>
          <Title>{title}</Title>

          <Rating>
            {rating}
            <Star>★</Star>
          </Rating>
        </Header>

        <Description>{description}</Description>

        <Button onClick={handleClick}>
          Saiba mais
        </Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard