import { FC } from "react";
import { Container, Text, Helper } from "./styledComponents";

interface Props {
  data: string;
  helper: string;
}

const CardData: FC<Props> = ({ data, helper }) => {
  return (
    <Container>
      <Text>{data}</Text>
      <Helper>{helper}</Helper>
    </Container>
  );
};

export default CardData;
