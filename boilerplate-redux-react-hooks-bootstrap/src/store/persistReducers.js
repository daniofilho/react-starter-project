import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'APP_KEY_HERE',
      storage,
      whiteList: ['navigation'],
    },
    reducers
  );

  return persistedReducer;
};
