class User

  attr_accessor :username, :hometown
  # basically the same as saying attr_reader and attr_writer in one go

  ALL = []
  # ALL is a constant, you cannot reassign by saying ALL = [] again

  # @@all is a class variable, it functions the same as a constant
  # but you can reassign it's value via @@all = []

  def initialize(username, hometown)
    @username = username
    @hometown = hometown

    ALL << self
  end

  def self.all
    ALL
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def delete_tweet(tweet)
    Tweet.all.delete(tweet)
  end

  def delete_my_tweets
    tweets.each do |tweet|
      delete_tweet(tweet)
    end
  end

end
