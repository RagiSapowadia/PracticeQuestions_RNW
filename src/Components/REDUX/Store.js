import {legacy_createStore as createStore} from 'redux';
import { CartReducer } from './CartReducer';

export const myStore = createStore(CartReducer);