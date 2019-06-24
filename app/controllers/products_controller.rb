class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end


  def show
    @product = Product.find(param[:id])
    render json: @product
  end
end
