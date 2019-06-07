# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.new_with_cart(first_name: "Jane", last_name: "Doe", email: "janedoe@email.com", password: "1234")
user1.save

user2 = User.new_with_cart(first_name: "Jim", last_name: "Carrey", email: "jimcarrey@email.com", password: "1234")
user2.save


Product.create(
  [
    {
      name: "Iphone X",
      description: "256GB Apple Iphone X in Black. This is an Unlocked apple iphone x that will work with any network.",
      image: "../assets/images/iphone-x.jpg",
      price: "$799.99"
    },
    {
      name: "Beats Headphones",
      description: "3rd Generation Wireless Noise Cancelling Beats Headphone. Brand new. If you are looking for a good headphones then this is the one for you. Comes with 3 years Manufacturer's warranty.",
      image: "../assets/images/beats.jpg",
      price: "$279.99"
    },
    {
      name: "Burberry Ladies HandBag",
      description: "Authentic Luxury Ladies HandBag from Burberry. If you sare looking to make a fashion statement then this is the abg for you.",
      image: "../assets/images/burberry-handbag.jpg",
      price: "$1499.99"
    },
    {
      name: "Rolex Yacht Master",
      description: "Authentic Rolex Yacht Master with rubber strap, Ceramic bezel with 18Kt EverRose Gold. Limited Edition. 2018 Model. 70 Hours power Reserve.",
      image: "../assets/images/rolex-yacht-master.jpg",
      price: "$21850"
    },
    {
      name: "Victoria Secret Ladies Parfum",
      description: "Hey Ladies! Looking For A New Parfum for the party. Give Victoria Secret's Newest Parfum A Try. With a scent of Rose, Everyone Will Want To Know What You Are Wearing At The Party.",
      image: "../assets/images/victoria_secret_perfum.jpg",
      price: "$69.99"
    }
  ]
)

user1.cart.products << [Product.find(1), Product.find(2)]
