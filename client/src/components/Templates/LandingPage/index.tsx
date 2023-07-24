import { FC, useContext } from "react";
import { PageTemplate } from "..";
import { ItemsContext } from "../../../contexts";
import { useGetItemsWithRelationsEffect } from "../../../services";
import { ItemCard } from "../../";
import { InnerContainer } from "./styledComponents";

const LandingPage: FC = () => {
  const { itemsWithRelations } = useContext(ItemsContext);

  useGetItemsWithRelationsEffect({ errorToast: true });

  return (
    <PageTemplate title="Welcome to Orders Manager!">
      <InnerContainer>
        {itemsWithRelations.map((item, id) => {
          return <ItemCard item={item} key={`${item.id}${id}`} />;
        })}
      </InnerContainer>
    </PageTemplate>
  );
};

export default LandingPage;
