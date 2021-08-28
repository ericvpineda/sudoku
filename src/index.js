import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import {GlobalStyles, Theme} from './styles'
import {Provider} from 'react-redux'
import {configStore} from './core'
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = configStore()

ReactDOM.render(
    <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
    </ThemeProvider>, 
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
