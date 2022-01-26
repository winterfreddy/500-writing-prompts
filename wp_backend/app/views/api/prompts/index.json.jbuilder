@prompts.each do |prompt|
    json.set! prompt.id do
        json.prompt_title prompt.title
    end
end