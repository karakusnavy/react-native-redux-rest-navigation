import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Login from './pages/Login'
import Users from './pages/Users'

const initialState = {
    loginstate: 'Not logged',
}

const reducer = (state = initialState, action) => {

    if (action.type == 'setLoginState') {
        return Object.assign({}, state, { loginstate: action.login })
    }
    return state

}

const store = createStore(reducer)


let RootStack = createStackNavigator({
    LoginScreen: Login,
    UsersScreen: Users
}, { headerMode: 'none' });

let Navigation = createAppContainer(RootStack);

// Render the app container component with the provider around it
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}