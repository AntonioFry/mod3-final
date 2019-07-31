import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { donationReducer } from './donationReducer';

export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationReducer
})