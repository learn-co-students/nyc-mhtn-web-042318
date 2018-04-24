require 'rest-client'
require 'json'
require 'pry'

# response = RestClient.get 'https://www.reddit.com/.json'
# reddit_hash = JSON.parse(response.body)
# posts = reddit_hash["data"]["children"]
#
# titles = posts.map do |post|
#   post["data"]["title"]
# end


def welcome
  puts "Hello welcome to my library!"
end

def get_genre
  puts "What kind of books do you wanna see?"
  gets.chomp
end

def run
  welcome
  genre = get_genre
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{genre}"
  book_hash = JSON.parse(response.body)

  books = book_hash["items"]

  binding.pry
end

run
