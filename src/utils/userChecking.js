export const checkIfUserIsThePlantProprietary = (
  plantProprietary,
  currentUser
) => {
  if (plantProprietary === currentUser) {
    return true;
  } else {
    return false;
  }
};
