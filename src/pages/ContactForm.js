import React, { useState, useEffect } from 'react';
import { addContact } from '../actions/ContactAction';
import { useAppState } from '../context/AppStateProvider';
import { FindAllContacts, updateContact } from '../actions/ContactAction';

const ContactForm = () => {
  const [ id, setId ]       = useState('');
  const [ name, setName ]   = useState('');
  const [ phone, setPhone ] = useState('');
  const [ state, dispatch ] = useAppState();

  const { addContactResult, detailContactResult, updateContactResult } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateContact(dispatch, { id: id, name: name, phone: phone });
    } else {
      addContact(dispatch, { name: name, phone: phone });
    }
  };

  /**
   * @description: useEffect hook to save the new contact
   */
  useEffect(() => {
    if (addContactResult) {
      FindAllContacts(dispatch);
      setName('');
      setPhone('');
      setId('');
    }
  }, [addContactResult, dispatch]);

  /**
   * @description: useEffect hook to update the existing contact
   */
  useEffect(() => {
    if (updateContactResult) {
      FindAllContacts(dispatch);
      setName('');
      setPhone('');
    }
  }, [updateContactResult, dispatch]);

  /**
   * @description: useEffect hook to edit form the existing contact
   */
  useEffect(() => {
    if (detailContactResult) {
      console.log(detailContactResult, 'edit');
      FindAllContacts(dispatch);
      setId(detailContactResult.id);
      setName(detailContactResult.name);
      setPhone(detailContactResult.phone);
    }
  }, [detailContactResult, dispatch]);

  return (
    <div>
      <div className='container'>
        <div className='card'>
          <div className='d-flex justify-content-center'>
            <h4>
              <strong>{id ? 'Edit Contact' : 'Save Contact'}</strong>
            </h4>
          </div>
          <div className='card-body'>
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <input
                className='form-control'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{' '}
              <br />
              <input
                className='form-control'
                type='text'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
