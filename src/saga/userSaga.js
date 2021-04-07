import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_CUSTOMERS, addManyCustomersAction } from '../store/customerReducer'

const fetchFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchCustomersWorker() {
    const data = yield call(fetchFromApi)
    //const json = yield  data.json()
    const json = yield call( () => new Promise(res => res(data.json())))
    yield put(addManyCustomersAction(json))

    // console.log(json);
}

export function* customerWatcher() {
    yield takeEvery(FETCH_CUSTOMERS, fetchCustomersWorker)
}
