import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { donationReducer } from './donationReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationReducer,
  error: errorReducer
})