import { useCallback, useContext } from "react";
import { ItemsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ITEMS_ROUTE, WITH_RELATIONS } from "../../config/constants";

const useGetItemsWithRelations = (responseOptions: IHandleResponseOptions) => {
  const { setItemsWithRelations } = useContext(ItemsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const getItemsWithRelations = useCallback(() => {
    executeRequest({
      route: `/${ITEMS_ROUTE}/${WITH_RELATIONS}`,
      setState: setItemsWithRelations,
    });
  }, [executeRequest, setItemsWithRelations]);

  return { getItemsWithRelations, isError, isSuccess, isLoading, message };
};

export default useGetItemsWithRelations;
