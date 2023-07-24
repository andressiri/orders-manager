import { ModelStatic } from "sequelize";
import { throwHTTPError } from "../../../../../application/helpers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getItemByIdConstructor = (Item: ModelStatic<any>) => {
  const getItemById = async (id: string) => {
    const result = await Item.findByPk(id, { raw: true });

    if (!result?.id) throwHTTPError(404, `There is no Item for the id ${id}`);

    return result;
  };

  return getItemById;
};

export default getItemByIdConstructor;
