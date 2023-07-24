const validateUUID = (id: string) => {
  return String(id)
    .toLowerCase()
    .match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
};

export default validateUUID;
