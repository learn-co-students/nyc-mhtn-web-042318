class Tweet

  attr_accessor :message, :user, :timestamp

  ALL = []

  def initialize(message, user, timestamp="whatever")
    @message = message
    @user = user
    @timestamp = timestamp
    ALL << self
  end

  def self.all
    ALL
  end
end
