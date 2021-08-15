import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { applyMiddleware, createStore } from 'redux';
import rootReducers from './stores/rootReducers';
import thunk from 'redux-thunk';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import MainProviders from './navigation/App';
import App from './navigation/App';
const store = createStore(
        rootReducers,
        applyMiddleware(thunk)
)

const Root = () => {
        return (
                <Provider store={store}>
                        <App />


                </Provider>

        )
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Root));
