import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({ repositories: repositoriesReducer });

export default reducers;

//export default state
export type RootState = ReturnType<typeof reducers>;
