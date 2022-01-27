
export const fetchPrompts = () => (
    $.ajax({
        method: "GET",
        url: `/api/prompts`
    })
)

export const fetchPrompt = (prompt_id) => (
    $.ajax({
        method: "GET",
        url: `/api/prompts/${prompt_id}`
    })
)

export const createPrompt = (prompt) => {
    return $.ajax({
        method: "POST",
        url: `/api/prompts`,
        data: { prompt }
    })
}

export const updatePrompt = (prompt) => (
    $.ajax({
        method: "PATCH",
        url: `/api/prompts/${prompt.id}`,
        data: { prompt }
    })
)

export const deletePrompt = (prompt) => (
    $.ajax({
        method: "DELETE",
        url: `/api/prompts/${prompt.id}`
    })
)