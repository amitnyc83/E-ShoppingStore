require 'test_helper'

class CartProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get cart_id:integer" do
    get cart_products_cart_id:integer_url
    assert_response :success
  end

  test "should get product_id:integer" do
    get cart_products_product_id:integer_url
    assert_response :success
  end

end
