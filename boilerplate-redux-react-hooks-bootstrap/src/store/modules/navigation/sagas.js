import { all, takeLatest, put } from 'redux-saga/effects';

import {
  sagaExampleFunctionSuccess,
  sagaExampleFunctionFailure,
} from './actions';

export function* sagaExampleFunction({ payload }) {
  try {
    const { example } = payload;

    // . . .

    yield put(sagaExampleFunctionSuccess(example));
  } catch (err) {
    yield put(sagaExampleFunctionFailure());
  }
}

export default all([
  takeLatest('@example/SAGA_EXAMPLE_REQUEST', sagaExampleFunction),
]);
