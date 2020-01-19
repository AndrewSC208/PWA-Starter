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
    console.log("COUNTER: ", counter);

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
    // update the store for a instant client-side rerender
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

////////////////
// INITIAL STATE
////////////////
let initial = {
    processingCount: 0,
    isCreating: false,
    isReading: false,
    isUpdating: false,
    isDeleting: false,
    error: "",
    collection: {
        "0ee07ca8-fdc7-457c-be82-49ec46f6f77d": {id: "0ee07ca8-fdc7-457c-be82-49ec46f6f77d", name: "Test 1", count: 1},
        "649721c5-d88f-44af-bfb2-e25b788ee0c4": {id: "649721c5-d88f-44af-bfb2-e25b788ee0c4", name: "Test 2", count: 2},
        "4a5e4d38-6d47-40a0-a7ba-fdfdaf8e9622": {id: "4a5e4d38-6d47-40a0-a7ba-fdfdaf8e9622", name: "Test 3", count: 3}
    }
};

//////////
// REDUCER
//////////
export const counters = (state = initial, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_COUNTER:
            return {
                ...state,
                processingCount: state.processingCount++,
                collection: {
                    ...state.collection,
                    ...payload
                }
            };

        case UPDATE_COUNTER:
            return {
                ...state,
                isUpdating: true,
                processingCount: state.processingCount + 1,
                collection: {...state.collection}
            };

        case UPDATE_COUNTER_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                processingCount: state.processingCount - 1,
            };

        case UPDATE_COUNTER_ERROR:
            return {
                ...state,
                isUpdating: false,
                processingCount: state.processingCount - 1,
                error: payload
            };

        default:
            return state
    }
};

