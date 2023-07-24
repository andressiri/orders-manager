import { FC } from "react";
import {
  Container,
  StyledImage,
  ButtonContainer,
  Title,
} from "./styledComponents";
import { IItemWithRelations } from "../../../typings/items";
import { StyledButton, CardData } from "../..";

interface Props {
  item: IItemWithRelations;
}

const ItemCard: FC<Props> = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <StyledImage src={item.url} alt={`${item.title} image`} />
      <CardData data={`${item.quantity}`} helper="Stock" />
      <CardData data={`$${item.price}`} helper="Price" />
      <ButtonContainer>
        <StyledButton>Ir al producto</StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default ItemCard;
