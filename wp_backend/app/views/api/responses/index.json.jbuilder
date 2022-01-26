@responses.each do |response|
    json.set! response.id do
        json.prompt_title response.prompt.title
        json.partial! 'response', response: response
    end
end