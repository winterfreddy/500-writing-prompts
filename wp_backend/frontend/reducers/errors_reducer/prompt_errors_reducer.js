import { RECEIVE_PROMPT_ERRORS } from '../actions/prompt_actions';

const promptErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PROMPT_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default promptErrorsReducer;