import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from '../reducers'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage
}

const persistedRedux = persistReducer(persistConfig, reducer);

function configStore(state = {}) {
    const store = createStore(
        persistedRedux,
        state,
        devToolsEnhancer({})
    )
    const persistor = persistStore(store)
    
    return {store, persistor}
}

export default configStore;