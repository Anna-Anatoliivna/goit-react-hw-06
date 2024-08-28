const INITIAL_STATE = {
    contacts: [],
    showContactList: true,
};

export const contactsReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'contacts/add': {
            return {
              ...state,
              contacts: [...state.contacts, action.payload],
            };
    }
  default:
    return state;
    }
 
};

export const addContact = payload => {
  return {
    type: 'contacts/add',
    payload: payload,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/del',
    payload: contactId,
  };
};
