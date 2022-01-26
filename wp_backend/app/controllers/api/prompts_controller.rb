class Api::PromptsController < ApplicationController

    def index
        @prompts = Prompt.all
        render :index
    end

    def show
        @prompt = Prompt.find_by(id: params[:id])
        if @prompt
            render :show
        else
            render json: ['Fetching prompt failed: That prompt does not exist'], status: 422
        end
    end

    def create
        @prompt = Prompt.new(prompt_params)
        if @prompt.save!
            render :show
        else
            render json: @prompt.errors.full_messages, status: 422
        end
    end

    def update
        @prompt = Prompt.find_by(id: params[:id])
        if @prompt && @prompt.update!(prompt_params)
            render :show
        elsif !@prompt
            render json: ["Updating prompt failed: That prompt does not exist"], status: 422
        else
            render json: @prompt.errors.full_messages, status: 422
        end
    end

    def destroy
        @prompt = Prompt.find_by(id: params[:id])
        if @prompt
            @prompt.destroy
        else
            render json: ["Deleting prompt failed: That prompt does not exist"], status: 422
        end
    end

    private
    def prompt_params
        self.params.require(:prompt).permit(:title)
    end

end
