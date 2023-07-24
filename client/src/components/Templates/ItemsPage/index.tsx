import { FC, useContext } from "react";
import { PageTemplate } from "..";
import { ItemsContext } from "../../../contexts";
import { useGetItemsWithRelationsEffect } from "../../../services";
import { ItemCard } from "../../";
import { InnerContainer } from "./styledComponents";

const ItemsPage: FC = () => {
  const { itemsWithRelations } = useContext(ItemsContext);

  useGetItemsWithRelationsEffect({ errorToast: true });

  return (
    <PageTemplate title="This are our available items">
      <InnerContainer>
        {itemsWithRelations.map((item, id) => {
          return <ItemCard item={item} key={`${item.id}${id}`} />;
        })}
      </InnerContainer>
    </PageTemplate>
  );
};

export default ItemsPage;
