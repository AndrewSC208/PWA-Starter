///////////////
// ACTION TYPES
///////////////
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT           = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT           = 'counter/DECREMENT'

////////////////////////
// INITIAL COUNTER STATE
////////////////////////
const initialState = {
    isIncrementing: false,
    isDecrementing: false, 
    collection: [
        { id: '45jk', name: 'Counter One', count: 45 },
        { id: '46jk', name: 'Times I forgot something', count: 100 },
        { id: '47jk', name: 'Coffee cups consumed', count: 5000 },
        { id: '48jk', name: 'Time I did not wake up', count: 37 }
    ]
}

//////////////////
// ACTION CREATORS
//////////////////

// increment adds one to the counter
// export function increment() {
//     return { type: INCREMENT }
// }

export const increment = () => {
    return {type: INCREMENT}
}

// decrement removes one from the counter
export function decrement() {
    return { type: DECREMENT }
};

// incrementAsync adds one to the counter,
// while simulating an async action
export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 3000);
    }
}

// decrementAsync removes one from the counter,
// while simulating an async action
export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: DECREMENT
            })
        }, 3000)
    }
}

//////////////////
// COUNTER REDUCER
//////////////////
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            }

        default:
            return state
    }
}

