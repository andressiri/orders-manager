import { throwHTTPError } from "../../../../application/helpers";
import { Entity } from "../../../typings/database";

const getAllFromEntityConstructor = (entity: Entity) => {
  const getAllFromEntity = async () => {
    const results = await entity?.findAll({
      raw: true,
    });

    if (!results[0]?.id)
      throwHTTPError(404, "There are no elements for that entity");

    return results;
  };

  return getAllFromEntity;
};

export default getAllFromEntityConstructor;
