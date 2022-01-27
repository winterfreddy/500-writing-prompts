
export const fetchResponses = () => (
    $.ajax({
        method: "GET",
        url: `/api/responses`
    })
)

export const fetchResponse = (response_id) => (
    $.ajax({
        method: "GET",
        url: `/api/responses/${response_id}`
    })
)

export const createResponse = (response) => {
    return $.ajax({
        method: "POST",
        url: `/api/responses`,
        data: { response }
    })
}

export const updateResponse = (response) => (
    $.ajax({
        method: "PATCH",
        url: `/api/responses/${response.id}`,
        data: { response }
    })
)

export const deleteResponse = (response) => (
    $.ajax({
        method: "DELETE",
        url: `/api/responses/${response.id}`
    })
)