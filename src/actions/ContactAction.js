import axios from 'axios';

export const GET_CONTACT = 'GET_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DETAILS_CONTACT = 'DETAILS_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

export const FindAllContacts = (dispatch) => {
  dispatch({
    type: GET_CONTACT,
    payload: {
      loading: true,
      data: undefined,
      error: false,
    },
  });

  axios
    .get('http://localhost:3000/contact')
    .then((response) => {
      dispatch({
        type: GET_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CONTACT,
        payload: {
          loading: false,
          data: undefined,
          error: error.messages,
        },
      });
    });
};

export const addContact = (dispatch, data) => {
  dispatch({
    type: ADD_CONTACT,
    payload: {
      loading: true,
      data: undefined,
      error: false,
    },
  });

  axios
    .post('http://localhost:3000/contact', data)
    .then((response) => {
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
          data: undefined,
          error: error.messages,
        },
      });
    });
};

export const updateContact = (dispatch, data) => {
  dispatch({
    type: UPDATE_CONTACT,
    payload: {
      loading: true,
      data: undefined,
      error: false,
    },
  });

  axios
    .put('http://localhost:3000/contact/' + data.id, data)
    .then((response) => {
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          loading: false,
          data: undefined,
          error: error.messages,
        },
      });
    });
};

export const deleteContact = (dispatch, id) => {
  dispatch({
    type: DELETE_CONTACT,
    payload: {
      loading: true,
      data: undefined,
      error: false,
    },
  });

  axios
    .delete('http://localhost:3000/contact/' + id)
    .then((response) => {
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          error: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: undefined,
          error: error.messages,
        },
      });
    });
};

export const detailContacts = (dispatch, data) => {
  dispatch({
    type: DETAILS_CONTACT,
    payload: {
      data: data,
    },
  });
};
