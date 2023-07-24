import { useCallback, useContext } from "react";
import { ItemsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import {
  WITH_RELATIONS,
  ITEMS_ROUTE,
  ITEMS_SINGULAR,
} from "../../config/constants";

const useGetItemByIdWithRelations = (
  responseOptions: IHandleResponseOptions,
) => {
  const { setItemWithRelations } = useContext(ItemsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getItemByIdWithRelations = useCallback(
    (id: string) => {
      executeRequest({
        route: `/${ITEMS_ROUTE}/${ITEMS_SINGULAR}/${WITH_RELATIONS}/${id}`,
        setState: setItemWithRelations,
      });
    },
    [executeRequest, setItemWithRelations],
  );

  return { getItemByIdWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetItemByIdWithRelations;
