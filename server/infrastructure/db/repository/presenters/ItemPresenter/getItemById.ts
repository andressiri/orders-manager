import { ModelStatic } from "sequelize";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getItemByIdConstructor = (Item: ModelStatic<any>) => {
  const getItemById = async (id: string) => {
    const result = await Item.findByPk(id, { raw: true });

    if (!result?.id) return null;

    return result;
  };

  return getItemById;
};

export default getItemByIdConstructor;
