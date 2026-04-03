import {
  Overlay,
  Container,
  CloseButton,
  ModalImage,
  Content
} from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
}

const Modal = ({ isOpen, onClose, title, description, image }: Props) => {
  if (!isOpen) return null

  return (
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>X</CloseButton>

        <ModalImage src={image} alt={title} />

        <Content>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <button>Adicionar ao carrinho</button>
        </Content>
      </Container>
    </Overlay>
  )
}

export default Modal