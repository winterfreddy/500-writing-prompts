class Api::ResponsesController < ApplicationController
    before_action :require_user, only: [:create, :update, :destroy]

    def index
        @responses = Response.all
        render :index
    end

    def show
        @response = Response.find_by(id: params[:id])
        if @response
            render :show
        else
            render json: ['Fetching response failed: That response does not exist'], status: 422
        end
    end

    def create
        @response = Response.new(response_params)
        if @response.save!
            render :show
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def update
        @response = Response.find_by(id: params[:id])
        if @response && @response.update!(response_params)
            render :show
        elsif !@response
            render json: ["Updating response failed: That response does not exist"], status: 422
        else
            render json: @response.errors.full_messages, status: 422
        end
    end

    def destroy
        @response = Response.find_by(id: params[:id])
        if @response
            @response.destroy
        else
            render json: ["Deleting response failed: That response does not exist"], status: 422
        end
    end

    private
    def response_params
        self.params.require(:response).permit(:body, :prompt_id, :author_id)
    end
    
end
