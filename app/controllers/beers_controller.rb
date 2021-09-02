class BeersController < ApplicationController

  def app
    render component: "App"
  end

  def index
    beers = Beer.all.order(rating: :desc)
    #  render Component 'Items', props:{items:items}
  render json: beers
 end

 def create
  beer = Beer.new(beers_params)
  if(beer.save)
    render json: beer
  else
  end
 end

 def destroy
  @beer = Beer.find(params[:id])
  render json: @beer.destroy
 end

 def update
  @beer = Beer.find(params[:id])
  if(@beer.update(beers_params))
    render json: @beer
  else
  end
 end

 private

 def beers_params
  params.require(:beer).permit(:name, :color, :rating)
 end

end
