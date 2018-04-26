require 'pry'
require_relative 'user'
require_relative 'tweet'


rishi = User.new("rishi", "nj")
mike = User.new("mike", "ny")
ashlee = User.new("ashlee", "fl")
jon = User.new("jon", "dc")

rishi.post_tweet("I hd tea")
mike.post_tweet("i like tea better than coffe")
ashlee.post_tweet("oh i have to say something about coffeee? coffe yummy")
jon.post_tweet("ummmm drinking coffee.")

rishi.post_tweet("i prefer coffee much more")
rishi.post_tweet("i hate everhthing")

Pry.start
