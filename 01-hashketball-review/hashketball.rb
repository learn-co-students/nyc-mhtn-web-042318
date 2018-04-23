require 'pry'

# players : {
  #"Alan Anderson": {
    #information
  #}
#}

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def num_points_scored(player_name)
  # find the player whose name matches the argument 'player_name'
  player = get_player(player_name)
  # return that player's points
  player[:points]
end

def num_rebounds(player_name)
  # find the player whose name matches the argument 'player_name'
  player = get_player(player_name)
  # return that player's rebounds
  player[:rebounds]
end


def get_all_players
  hash = game_hash
  home_players = hash[:home][:players]
  away_players = hash[:away][:players]
  #return home_players.concat(away_players)
  # home_players + away_players

  # what if we have hash[:team3][:players]
  results = hash.map do |_, team_data|
    team_data[:players]
  end

  # [[p1, p2, p3], [p4, p5, p6]]
  results.flatten # [p1, p2, p3, p4, p5, p6]
end



def get_player(player_name)
  # get a list of all the players
  get_all_players.find do |player|
    player[:player_name] == player_name
  end
end


def get_all_player_names
  get_all_players.map do |player|
    player[:player_name]
  end
end

# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Rishi', hometown: 'North Brunswick, NJ', age: 30},
  {name: 'Ashlee', hometown: 'Delray Beach, FL', age: 23},
  {name: 'Jon', hometown: 'Washington, DC', age: 19},
  {name: 'Mike', hometown: 'New York, NY', age: 65}
]

# map returns an array of every object that you pass in,
#but can transform each element in some way
def get_names(instructors)
  # results = []
  # instructors.each do |i|
  #   results << i[:name]
  # end
  #
  # results

  instructors.map do |instructor|
    # in our block, we must return the result that we want to exist
    # in the final array
    instructor[:name]
  end
end

def who_can_drink_legally(instructors)
  instructors.select do |instructor|
    instructor[:age] >= 21
  end
end



# EXERCISE
# What do the following return?

# arr = (1..100).to_a

# when we use map, we get the same number of elements, each element
# has just changed
# arr.map do |num|
#   num.even?
# end

# when we use select, our elements have the same structure and values,
# however, there may be less of them
# arr.select do |num|
#   # the block inside of the select MUST evaluate to a condition
#   num.even?
# end

# arr.select do |num|
#   7
# end

# if 7
#   puts "seven"
# end


# MAP PRESERVES THE NUMBER OF ELEMENTS, BUT TRANSFORMS EACH ONE
  # inside the block, map takes the element, and returns the transformation
# SELECT PRESERVES THE ELEMENTS, BUT RETURNS ONLY THE ELEMENTS THAT PASS THE CONDITION
  # inside the block, select takes the element, and returns a condition that evaluates
  # to either true or false

# Pry.start
