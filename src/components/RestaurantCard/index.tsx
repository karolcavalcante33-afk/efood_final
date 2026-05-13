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
  // Importe o TagsContainer que criamos no styles.ts
  TagsContainer, 
  Tag 
} from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  category: string
  rating: number
  infos?: string[] // Caso você queira passar as tags por prop depois
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
      {/* Removemos a div com style inline e usamos a estrutura do styled-components */}
      <Image src={image} alt={title} />
      
      <TagsContainer>
        {/* Aqui você pode colocar uma lógica para mostrar o destaque apenas se existir */}
        <Tag>Destaque da semana</Tag>
        <Tag>{category}</Tag>
      </TagsContainer>

      <Content>
        <Header>
          <Title>{title}</Title>
          <Rating>
            {rating}
            <span>★</span> {/* Estilize a estrela no styles.ts se precisar */}
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