import {put, takeEvery} from 'redux-saga/effects'
import { ASYNC_ADD_CASH, addCash, ASYNC_GET_CASH, getCash } from '../store/cashReducer'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* increamentWorker() {
    yield delay(1000)
    yield put(addCash())
}

function* decreamentWorker() {
    yield delay(1000)
    yield put(getCash())
}


export function* countWatcher() { 
    yield takeEvery(ASYNC_ADD_CASH, increamentWorker)
    yield takeEvery(ASYNC_GET_CASH, decreamentWorker)
}

