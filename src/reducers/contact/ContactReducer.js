import {
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  DETAILS_CONTACT,
  UPDATE_CONTACT,
} from '../../actions/ContactAction';

export const ContactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        getContactResult: action.payload.data,
        getContactLoading: action.payload.loading,
        getContactError: action.payload.errorMessages,
      };

    case ADD_CONTACT:
      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessages,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactResult: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessages,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        updateContactResult: action.payload.data,
        updateContactLoading: action.payload.loading,
        updateContactError: action.payload.errorMessages,
      };

    case DETAILS_CONTACT:
      return {
        ...state,
        detailContactResult: action.payload.data,
      };
    default:
      return state;
  }
};
