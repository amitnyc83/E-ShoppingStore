class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @product
  end


  def show
    @product = Product.find (param[:id])
    render json: @product
  end 
end
