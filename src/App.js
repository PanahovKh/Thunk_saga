import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
//import {addCustomersAction, removeCustomersAction} from './store/customerReducer'
//import { fetchCustomers } from './asynAction/customers'
import { asynAaddCash, asyncGetCash } from './store/cashReducer'
import { fetchCustomersAction } from './store/customerReducer'


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)


  // const addCash = () => {
  //   dispatch({type: "ADD_CASH", payload: 12})
  // }

  // const getCash = () => {
  //   dispatch({type: "GET_CASH", payload: 5})
  // }

  // const addCustomers = (name) => {
  //   const customer = {
  //     name,
  //     id: Date.now(),
  //   }
  //   dispatch(addCustomersAction(customer) )  //{type: "ADD_CUSTOMER", payload: customer}
  // }

  // const removeCustomer = (customer) => {
  //   dispatch(removeCustomersAction(customer.id))  //{type: "REMOVE_CUSTOMERS", payload: customer.id}
  // }

  return (
    <div className='app'>
      <div style={{ fontSize:'3rem' }}>{cash}</div>
      <div>
        <button onClick={() =>dispatch(asynAaddCash())}>Пополнить счет</button>
        <button onClick={() => dispatch(asyncGetCash())} >Снять со счета</button>
        <button onClick={() => dispatch(fetchCustomersAction())}>Получить клиента</button>
        {/* <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button> */}

        
      </div>
      <div className='customers'>
        {customers.length > 0 ?
            <div>
              {customers.map((customer) => 
                <div
                  key={customer.id}
                  style={{ fontSize:'2rem',border:'1px solid blue', padding: '10px' }}>
                    {customer.name}
                </div>
              )}
            </div>
            :
            <div style={{fontSize: '2rem', marginTop:20}}> Клиенты отсутсвует !</div>
        }
      </div>
    </div>
  );
}

export default App;
