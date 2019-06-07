class CartProductsController < ApplicationController

  def create
    @cart_product = CartProduct.create(cart_product_params)
    @cart = Cart.find(@cart_product.cart_id)
    render json: @cart
  end

  def destroy
    @product = CartProduct.find_by(cart_product_params)
    @cart = Cart.find(params[:cart_id])
    @cart_product.destroy
    render json: @cart
  end

  private

  def cart_product_params
    params.require(:cart_product).permit(:cart_id, :product_id)
  end

end
