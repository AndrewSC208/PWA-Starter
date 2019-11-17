////////////////
// INITIAL STATE
////////////////
const initial = {
    processingCount: 0,
    isCreating: false,
    isReading: false,
    isUpdating: false,
    isDeleting: false,
    collection: [
        { id: '45jk', name: 'Counter One', count: 45 },
        { id: '46jk', name: 'Times I forgot something', count: 100 },
        { id: '47jk', name: 'Coffee cups consumed', count: 5000 },
        { id: '48jk', name: 'Time I did not wake up', count: 37 }
    ]
};

//////////
// ACTIONS
//////////
// CREATE
export const CREATE_COUNTER         = "counter/CREATE";
export const CREATE_COUNTER_SUCCESS = "counter/CREATE_SUCCESS";
export const CREATE_COUNTER_ERROR   = "counter/CREATE_ERROR";

export const create_counter_req = counter => ({
    type: CREATE_COUNTER,
    payload: counter
});

export const create_counter_suc = response => ({
    type: CREATE_COUNTER_SUCCESS,
    payload: response
});

export const create_counter_err = error => ({
    type: CREATE_COUNTER_ERROR,
    payload: error
});

export const CreateCounter = counter => dispatch => {
    // update the store for a instant rerender
    dispatch(create_counter_req(counter));

    // make async call
    return setTimeout((res = true) => {
        if (res) {
            // if successful
            dispatch(create_counter_suc())
        } else {
            // if error
            dispatch(create_counter_err())
        }
    }, 1500);
};

// READ
export const READ_COUNTERS         = "counter/READ";
export const READ_COUNTERS_SUCCESS = "counter/READ_SUCCESS";
export const READ_COUNTERS_ERROR   = "counter/READ_ERROR";

export const read_counter_req = query => ({
    type: READ_COUNTERS,
    payload: query
});

export const read_counter_suc = response => ({
    type: READ_COUNTERS_SUCCESS,
    payload: response
});

export const read_counter_err = error => ({
    type: READ_COUNTERS_ERROR,
    payload: error
});

export const ReadCounter = query => dispatch => {
    // update the store for a instant rerender
    dispatch(read_counter_req(query));

    // make async call
    return setTimeout((res = true) => {
        if (res) {
            // if successful
            dispatch(read_counter_suc())
        } else {
            // if error
            dispatch(read_counter_err())
        }
    }, 1500);
};

// UPDATE
export const UPDATE_COUNTER         = "counter/UPDATE";
export const UPDATE_COUNTER_SUCCESS = "counter/UPDATE_SUCCESS";
export const UPDATE_COUNTER_ERROR   = "counter/UPDATE_ERROR";

export const update_counter_req = counter => ({
    type: UPDATE_COUNTER,
    payload: counter
});

export const update_counter_suc = response => ({
    type: UPDATE_COUNTER_SUCCESS,
    payload: response
});

export const update_counter_err = error => ({
    type: UPDATE_COUNTER_ERROR,
    payload: error
});

export const UpdateCounter = counter => dispatch => {
    // update the store for a instant rerender
    dispatch(update_counter_req(counter));

    // make async call
    return setTimeout((res = true) => {
        if (res) {
            // if successful
            dispatch(update_counter_suc())
        } else {
            // if error
            dispatch(update_counter_err())
        }
    }, 1500);
};

// DELETE
export const DESTROY_COUNTER         = "counter/DESTROY";
export const DESTROY_COUNTER_SUCCESS = "counter/DESTROY_SUCCESS";
export const DESTROY_COUNTER_ERROR   = "counter/DESTROY_ERROR";

export const destroy_counter_req = counter => ({
    type: DESTROY_COUNTER,
    payload: counter
});

export const destroy_counter_suc = response => ({
    type: DESTROY_COUNTER_SUCCESS,
    payload: response
});

export const destroy_counter_err = error => ({
    type: DESTROY_COUNTER_ERROR,
    payload: error
});

export const DestroyCounter = counter => dispatch => {
    // destroy the store for a instant rerender
    dispatch(destroy_counter_req(counter));

    // make async call
    return setTimeout((res = true) => {
        if (res) {
            // if successful
            dispatch(destroy_counter_suc())
        } else {
            // if error
            dispatch(destroy_counter_err())
        }
    }, 1500);
};

//////////
// REDUCER
//////////
export default (state = initial, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_COUNTER:
            debugger;
            return {
                ...state,
                count: {payload},
                processingCount: state.processingCount++
            };

        default:
            return state
    }
}

