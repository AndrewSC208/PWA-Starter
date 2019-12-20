import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk';

import {counters} from './counter';

export function initStore(preloadedState) {
    // TODO -> add enhancers
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
}

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        counters
    });

export const history = createBrowserHistory();