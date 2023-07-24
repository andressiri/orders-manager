import { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IItemsContext,
  Items,
  ItemsWithRelations,
  Item,
  ItemWithRelations,
} from "../../typings/contexts";

export const ItemsContext = createContext<IItemsContext>({
  items: [],
  setItems: () => [],
  itemsWithRelations: [],
  setItemsWithRelations: () => [],
  item: {},
  setItem: () => {
    return {};
  },
  itemWithRelations: {},
  setItemWithRelations: () => {
    return {};
  },
});

export const ItemsContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<Items>([]);
  const [itemsWithRelations, setItemsWithRelations] =
    useState<ItemsWithRelations>([]);
  const [item, setItem] = useState<Item>({});
  const [itemWithRelations, setItemWithRelations] = useState<ItemWithRelations>(
    {},
  );

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        itemsWithRelations,
        setItemsWithRelations,
        item,
        setItem,
        itemWithRelations,
        setItemWithRelations,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
