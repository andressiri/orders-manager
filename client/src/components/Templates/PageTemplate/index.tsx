import { FC } from "react";
import { PageTitle } from "../..";
import { Container } from "./styledComponents";

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const PageTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <PageTitle text={title} />
      {children}
    </Container>
  );
};

export default PageTemplate;
