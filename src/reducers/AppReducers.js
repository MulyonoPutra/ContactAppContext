import { ContactReducer } from "../reducers/contact/ContactReducer";

const initialState = {
  getContactResult: undefined,
  getContactLoading: false,
  getContactError: false,

  addContactResult: undefined,
  addContactLoading: false,
  addContactError: false,

  deleteContactResult: undefined,
  deleteContactLoading: false,
  deleteContactError: false,

  editContactResult: undefined,

  updateContactResult: undefined,
  updateContactLoading: false,
  updateContactError: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  ContactReducer,
});

export { appReducers, initialState, combineReducers };
