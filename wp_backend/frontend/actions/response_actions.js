import * as ResponseApiUtil from '../util/response_api_util';

export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const REMOVE_RESPONSE = "REMOVE_RESPONSE";
export const RECEIVE_RESPONSE_ERRORS = "RECEIVE_RESPONSE_ERRORS";

const receiveResponses = (responses) => ({
    type: RECEIVE_RESPONSES,
    responses
})

const receiveResponse = (response) => ({
    type: RECEIVE_RESPONSE,
    response
})

const removeResponse = (response) => ({
    type: REMOVE_RESPONSE,
    response
})

const receiveResponseErrors = (errors) => ({
    type: RECEIVE_RESPONSE_ERRORS,
    errors
})

export const fetchResponses = () => dispatch => (
    ResponseApiUtil.fetchResponses()
        .then((responses) => dispatch(receiveResponses(responses)))
)

export const fetchResponse = (id) => dispatch => (
    ResponseApiUtil.fetchResponse(id)
        .then((response) => dispatch(receiveResponse(response)),
            error => dispatch(receiveResponseErrors(error.responseJSON))
        )
)

export const createResponse = (response) => dispatch => (
    ResponseApiUtil.createResponse(response)
        .then((response) => dispatch(receiveResponse(response)),
            error => dispatch(receiveResponseErrors(error.responseJSON))
        )
)

export const updateResponse = (response) => dispatch => (
    ResponseApiUtil.updateResponse(response)
        .then((response) => dispatch(receiveResponse(response)),
            error => dispatch(receiveResponseErrors(error.responseJSON))
        )
)

export const deleteResponse = (response) => dispatch => (
    ResponseApiUtil.deleteResponse(response)
        .then(() => dispatch(removeResponse(response)),
            error => dispatch(receiveResponseErrors(error.responseJSON))
        )
)