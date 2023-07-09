export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const contactsToRender =  state => {
    const getTrimmedFilter = getFilter(state).trim().toLowerCase();
    const currentContacts = getContacts(state);

    if(getTrimmedFilter) {
        return currentContacts.filter(({ contact: {name}}) => name.toLowerCase().includes(getTrimmedFilter))
    } else {
        return currentContacts
    }
}