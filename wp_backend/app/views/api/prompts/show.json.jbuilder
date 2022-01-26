json.prompt_title @prompt.title
json.prompt_response @prompt.responses do |response|
    json.username response.user.username
    json.body response.body
end