# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


names = %w(will bill phil)
titles = %w(gist list pissed)

names.each {|name| User.create(username: name, password: "password")}
titles.each {|title| Gist.create(title: title, user_id: 1)}