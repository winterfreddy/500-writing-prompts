import { RECEIVE_RESPONSES, RECEIVE_RESPONSE, REMOVE_RESPONSE } from '../actions/response_actions';

const responsesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_RESPONSES:
            return action.responses;
        case RECEIVE_RESPONSE:
            nextState[action.response.id] = action.response;
            return nextState;
        case REMOVE_RESPONSE:
            delete nextState[action.response.id];
            return nextState;
        default:
            return state;
    }
}

export default responsesReducer;