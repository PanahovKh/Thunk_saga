import { all } from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { customerWatcher } from './userSaga'

export function* rootWatcher() {
    yield all( [countWatcher(), customerWatcher()] )
}