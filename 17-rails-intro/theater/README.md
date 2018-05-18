CHANGES FROM SINATRA TO RAILS

### Models
* extend ApplicationRecord not ActiveRecord::Base

### Routing
* done via `config/routes.rb`
* if you're in rails 4 you have to restart the server for routing changes to take effect. I'm in rails 5 so I didn't need to restart the server

### Controller
* rails implicitly chooses the right view if you name the controller and view appropriately
* The names that Rails really likes are:
  - index
  - show
  - new
  - edit
  - update
  - destroy


### View
* view file extensions must be `*.html.erb`

### Rails Helpers
* `link_to` takes 2 params:
  1. the string you want to show the user
  2. the actual location that the link takes the user to
    `"/movies/#{movie.id}"` or `movie_path(movie.id)` or
    `movie_path(movie)` or `movie`
