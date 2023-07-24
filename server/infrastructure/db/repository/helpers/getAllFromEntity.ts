import { Entity } from "../../../typings/database";

const getAllFromEntityConstructor = (entity: Entity) => {
  const getAllFromEntity = async () => {
    const results = await entity?.findAll({
      raw: true,
    });

    if (!results[0]?.id) return null;

    return results;
  };

  return getAllFromEntity;
};

export default getAllFromEntityConstructor;
