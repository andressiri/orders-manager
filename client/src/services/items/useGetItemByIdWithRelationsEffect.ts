import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetItemByIdWithRelations from "./useGetItemByIdWithRelations";
import { IHandleResponseOptions } from "../../typings/services";

const useGetItemByIdWithRelationsEffect = (
  responseOptions: IHandleResponseOptions,
) => {
  const { id } = useParams();
  const getItemByIdWithRelationsObj =
    useGetItemByIdWithRelations(responseOptions);
  const { getItemByIdWithRelations } = getItemByIdWithRelationsObj;

  useEffect(() => {
    getItemByIdWithRelations(id as string);
  }, [id, getItemByIdWithRelations]);

  return getItemByIdWithRelationsObj;
};

export default useGetItemByIdWithRelationsEffect;
