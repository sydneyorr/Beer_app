# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.destroy_all

am = Beer.create(name:"Amber Ale", color:"amber", rating:4)
apa = Beer.create(name:"American Pale Ale", color:"medium", rating:4)
ca = Beer.create(name:"Cream Ale", color:"light", rating:3)
ipa = Beer.create(name:"IPA", color:"dark", rating:4)