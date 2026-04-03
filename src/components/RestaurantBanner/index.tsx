import { Container, Category, Title } from './styles'

type Props = {
  image: string
  title: string
  category: string
}

const RestaurantBanner = ({ image, title, category }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <div>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
    </Container>
  )
}

export default RestaurantBanner