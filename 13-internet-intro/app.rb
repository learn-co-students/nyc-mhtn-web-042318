require "pry"

class App
  def self.homepage
    "WELCOME HOME"
  end

  def self.call(environment_hash)
    # status_code = 200
    # header = {}
    # body = ['hello'] # or {}


    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path == "/hello"
      resp.write("Hello World")
    elsif req.path == "/bye"
      resp.write("Goodbye world")
    elsif req.path == "/info"
      resp.write("More info here")
    elsif req.path == "/"
      resp.write(self.homepage)
    else
      resp.write("ARE YOU SURE??? 40404040404040")
      resp.status = 404
    end


    resp.finish

    # return [status_code, header, body]
  end
end
