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

def make_request(genre)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{genre}"
  JSON.parse(response.body)
end

def get_books(genre)
  book_hash = make_request(genre)
  book_hash["items"]
end

def print_books(books)
  books.each do |book|
    print_book_info(book["volumeInfo"])
  end
end

def print_book_info(bookInfo)
  puts "Title: #{bookInfo["title"]}"
  puts "Authors: #{author_string(bookInfo["authors"])}"
  puts "Description: #{bookInfo["description"]}"
  puts "\n"
end

def author_string(authors)
  if authors
    authors.join(",")
  else
    ""
  end
end


def run
  welcome
  genre = get_genre
  books = get_books(genre)
  print_books(books)
end

run
