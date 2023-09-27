import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'

import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'


const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, combineReducers({
    counter: counterReducer,
}))

// Store or Global State Configuration
const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

// Export the store or global state
export default store