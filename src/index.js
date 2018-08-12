/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Login from './containters/login/login'
import Register from './containters/register/register'
import Main from './containters/main/main'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'))