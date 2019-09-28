import { all } from 'redux-saga/effects';

import navigation from './navigation/sagas';

export default function* rootSaga() {
  return yield all([navigation]);
}
