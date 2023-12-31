import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name:'jill jonhson',
        email: 'jill@gmail.com',
        phone: '111-111-111211',
        type: 'personal'
      },
      {
        id: 2,
        name: 'edward frank',
        email: 'edwardfrank@gmail.com',
        phone: '111-111-110991',
        type: 'professional'
      },
      {
        id: 3,
        name:'adit chopra',
        email: 'aditchopra@gmail.com',
        phone: '111-111-1333111',
        type: 'personal'
      },
    ],
    current: null,  //whenevr you click edit button the coatact detail should be put in this state
    filtered: null
  
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //addding cont
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  //delete
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  }




  //set current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  }



  //clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT});
  }

  //update
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  }

  //filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text});
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER});
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
       
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;