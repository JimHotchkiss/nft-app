class::Api::V1:: NftsController < ApplicationController

def index 
    @nfts = Nft.all
    render json: @nfts 
end 

def create
    @nft = Nft.new(nft_params)

    if @nft.save
        render json: @nft
    else 
        render json: {error: "Was unable to save Nft"}
    end 
end 

def show
end 

private 
def nft_params
    params.require(:nft).permit(:token_id, :image_url, :background_color, :name, :external_link, :asset_contract, :owner, :traits, :last_sale)
end 
end
