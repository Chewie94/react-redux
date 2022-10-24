import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, withdrawCashAction } from './store/cashReducer';
import {fetchCustomers} from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  console.log('customers', customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }
  
  const getCash = (cash) => {
    dispatch(withdrawCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customerId) => {
    dispatch(removeCustomerAction(customerId));
  }

  const resolveCustomersView = () => {
    if(customers.length > 0) {
      const customersList = customers.map(customer => 
        <div 
          style={{ fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: '5px' }} 
          key={customer.id}
          onClick={() => removeCustomer(customer.id)}
        >
          {customer.name}
        </div>
      )
      return <div>{customersList}</div>
    }

    return <div style={{ fontSize: "2rem", marginTop: 20}}>No Customers!</div>
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>Add Money</button>
        <button onClick={() => getCash(Number(prompt()))}>Withdraw Money</button>
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => getCash(Number(prompt()))}>Remove Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Fetch Customers from DB</button>
      </div>
      {resolveCustomersView()}
    </div>
  );
}

export default App;
