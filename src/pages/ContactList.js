import { useEffect } from 'react';
import {
  FindAllContacts,
  deleteContact,
  detailContacts,
} from '../actions/ContactAction';
import { useAppState } from '../context/AppStateProvider';

const ContactList = () => {
  const [state, dispatch] = useAppState();
  const {
    getContactResult,
    getContactLoading,
    getContactError,
    deleteContactResult,
  } = state;

  useEffect(() => {
    console.log('ContactList: ');
  });

  useEffect(() => {
    FindAllContacts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      FindAllContacts(dispatch);
    }
  }, [dispatch, deleteContactResult]);

  const onLoading = () => {
    if (getContactLoading) {
      return <div>Loading...</div>;
    }
  };

  const onError = () => {
    if (getContactError) {
      return <div>Empty Data..</div>;
    }
  };

  const renderTable = () => {
    if (getContactResult) {
      return getContactResult.map((contact, index) => {
        return (
          <tbody>
            <tr key={contact.id}>
              <th>{contact.name}</th>
              <th>{contact.phone}</th>
              <th>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    deleteContact(dispatch, contact.id);
                  }}
                >
                  Delete
                </button>{' '}
                &nbsp;
                <button
                  className='btn btn-warning'
                  onClick={() => {
                    detailContacts(dispatch, contact);
                  }}
                >
                  Edit
                </button>
              </th>
            </tr>
          </tbody>
        );
      });
    }
  };

  return (
    <div className='container'>
      <div className='card' style={{ width: '34rem' }}>
        <div className='card-body'>
          <span className='d-flex justify-content-center'>
            <h4>
              <strong>Contact list</strong>
            </h4>
          </span>
          <div className='container'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Phone</th>
                </tr>
              </thead>
              {renderTable()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
