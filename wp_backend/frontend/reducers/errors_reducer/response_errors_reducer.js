import { RECEIVE_RESPONSE_ERRORS } from '../../actions/response_actions';

const responseErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_RESPONSE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default responseErrorsReducer;