# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


man = Franchise.create(city: "Manhattan")
mil = Franchise.create(city: "Milwaukee")
bk = Franchise.create(city: "Brooklyn")
philly = Franchise.create(city: "Philadelphia")
sf = Franchise.create(city: "San Francisco")

Employee.create(name: "Michelle", franchise: bk)
Employee.create(name: "Louis", franchise: man)
Employee.create(name: "Eelan", franchise: sf)
Employee.create(name: "Jon", franchise: bk)
Employee.create(name: "Ian", franchise: bk)
Employee.create(name: "Derek", franchise: mil)
Employee.create(name: "Aaron", franchise: philly)
Employee.create(name: "Aleks", franchise: bk)
Employee.create(name: "Betsy", franchise: sf)
Employee.create(name: "Ed", franchise: bk)
Employee.create(name: "Ryan", franchise: sf)
Employee.create(name: "Sangeetha", franchise: man)
Employee.create(name: "Sydney", franchise: philly)
Employee.create(name: "Mendy", franchise: bk)
Employee.create(name: "Jeffrey", franchise: philly)

puts "Done!!"
