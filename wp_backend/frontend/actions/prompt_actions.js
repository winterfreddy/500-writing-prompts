import * as PromptApiUtil from '../util/prompt_api_util';

export const RECEIVE_PROMPTS = "RECEIVE_PROMPTS";
export const RECEIVE_PROMPT = "RECEIVE_PROMPT";
export const REMOVE_PROMPT = "REMOVE_PROMPT";
export const RECEIVE_PROMPT_ERRORS = "RECEIVE_PROMPT_ERRORS";

const receivePrompts = (prompts) => ({
    type: RECEIVE_PROMPTS,
    prompts
})

const receivePrompt = (prompt) => ({
    type: RECEIVE_PROMPT,
    prompt
})

const removePrompt = (prompt) => ({
    type: REMOVE_PROMPT,
    prompt
})

const receivePromptErrors = (errors) => ({
    type: RECEIVE_PROMPT_ERRORS,
    errors
})

export const fetchPrompts = () => dispatch => (
    PromptApiUtil.fetchPrompts()
        .then((prompts) => dispatch(receivePrompts(prompts)))
)

export const fetchPrompt = (id) => dispatch => (
    PromptApiUtil.fetchPrompt(id)
        .then((prompt) => dispatch(receivePrompt(prompt)),
            error => dispatch(receivePromptErrors(error.responseJSON))
        )
)

export const createPrompt = (prompt) => dispatch => (
    PromptApiUtil.createPrompt(prompt)
        .then((prompt) => dispatch(receivePrompt(prompt)),
            error => dispatch(receivePromptErrors(error.responseJSON))
        )
)

export const updatePrompt = (prompt) => dispatch => (
    PromptApiUtil.updatePrompt(prompt)
        .then((prompt) => dispatch(receivePrompt(prompt)),
            error => dispatch(receivePromptErrors(error.responseJSON))
        )
)

export const deletePrompt = (prompt) => dispatch => (
    PromptApiUtil.deletePrompt(prompt)
        .then(() => dispatch(removePrompt(prompt)),
            error => dispatch(receivePromptErrors(error.responseJSON))
        )
)