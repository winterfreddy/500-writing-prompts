import { RECEIVE_PROMPTS, RECEIVE_PROMPT, REMOVE_PROMPT } from '../actions/prompt_actions';

const promptsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_PROMPT:
            return action.prompts;
        case RECEIVE_PROMPTS:
            nextState[action.prompt.id] = action.prompt;
            return nextState;
        case REMOVE_PROMPT:
            delete nextState[action.prompt.id];
            return nextState;
        default:
            return state;
    }
}

export default promptsReducer;