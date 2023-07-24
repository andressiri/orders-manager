import { useEffect } from "react";
import useGetItemsWithRelations from "./useGetItemsWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetItemsWithRelationsEffect = (
  responseOptions: IHandleResponseOptions,
) => {
  const getItemsWithRelationsObj = useGetItemsWithRelations(responseOptions);
  const { getItemsWithRelations } = getItemsWithRelationsObj;

  useEffect(() => {
    getItemsWithRelations();
  }, [getItemsWithRelations]);

  return getItemsWithRelationsObj;
};

export default useGetItemsWithRelationsEffect;
