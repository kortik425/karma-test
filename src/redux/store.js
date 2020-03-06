import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native'; 
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import locations, { initialState as locationsInitial }  from './modules/locations';

const middlewares = [thunk];
const initialState = locationsInitial;

const defaultPersistConfig = key => ({ key, storage: AsyncStorage });

const reducer =  persistReducer(defaultPersistConfig('root'), locations);

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default store;
