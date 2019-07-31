export const donationReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DONATION":
      return [...state, action.donation];

    case "SET_DONATIONS":
      return action.donations
  
    default:
      return state;
  }
}