const defaultState = {
    customers: [],
};

const CUSTOMER_ACTION_TYPES = {
  ADD: "ADD_CUSTOMER",
  ADD_MANY: "ADD_MANY_CUSTOMERS",
  REMOVE: "REMOVE_CUSTOMER",
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CUSTOMER_ACTION_TYPES.ADD_MANY:
        return {...state, customers: [...state.customers, ...action.payload ]}
    case CUSTOMER_ACTION_TYPES.ADD:
      return { ...state, customers: [...state.customers, action.payload] };
    case CUSTOMER_ACTION_TYPES.REMOVE:
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload )};
    default:
      return state;
  }
}

export const addCustomerAction = (payload) => ({type: CUSTOMER_ACTION_TYPES.ADD, payload});
export const addManyCustomersAction = (payload) => ({type: CUSTOMER_ACTION_TYPES.ADD_MANY, payload});
export const removeCustomerAction = (payload) => ({type: CUSTOMER_ACTION_TYPES.REMOVE, payload});