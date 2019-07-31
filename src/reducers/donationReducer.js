export const donationReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DONATION":
      return [...state, action.donation];
  
    default:
      return state;
  }
}