class ShippingAddressesController < ApplicationController

  def show
    @shipping_address = ShippingAddress.find(params[:id])
    render json: @shipping_address
  end

  def new
    @shipping_address = Shipping_Address.new
  end

  def create
    @shipping_address = ShippingAddress.new(shipping_address_params)
    if @shipping.save
    render json: @shipping_address, status: 201
   end
  end


  def update
    @shipping_address = ShippingAddress(params[:id])
    @shipping_address.update(shipping_address_params)
    if @shipping_address.save
      render json: @shipping_address, status: 201
    end
  end

  private


  def shipping_address_params
    params.require(:shipping_address).permit(:address, :city, :state, :country, :user_id)
  end


end
