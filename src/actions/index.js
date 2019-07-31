export const addDonation = (donation) => ({
  type: "ADD_DONATION",
  donation
});

export const setAnimals = (animals) => ({
  type: "SET_ANIMALS",
  animals
});

export const setError = (error) => ({
  type: "SET_ERROR",
  error
});

export const setDonations = (donations) => ({
  type: "SET_DONATIONS",
  donations
});