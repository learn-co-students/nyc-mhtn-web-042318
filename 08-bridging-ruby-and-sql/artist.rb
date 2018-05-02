require 'sqlite3'
require 'pry'

DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true


class Artist
  attr_accessor :name
  attr_reader :id

  def initialize(id=nil, name)
    # Artist.new("Kanye")
    # Artist.new(3, "Kanye")

    @id = id
    @name = name
  end

  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)

    @id = Artist.get_latest_id
    self
  end

  def self.create(name)
    a = Artist.new(name)
    a.save
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    result = DB[:conn].execute(sql, id)[0]
    parse_artist(result)
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM artists
    SQL

    result = DB[:conn].execute(sql)
    parse_artists(result)
  end

  def update(name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, name, @id)
    @name = name
    Artist.find(@id)
  end

  def self.delete(id)
    sql = <<-SQL
      DELETE FROM artists WHERE id=?;
    SQL

    DB[:conn].execute(sql, id)
    #this is treachery and fake
    !Artist.find(id)
  end

  private

  def self.parse_artists(array)
    array.map do |row|
      parse_artist(row)
    end
  end

  def self.parse_artist(row) #into object
    if !row
      return nil
    end
    Artist.new(row["id"], row["name"])
  end

  def self.get_latest_id
    sql = <<-SQL
      SELECT (id) FROM artists ORDER BY id DESC LIMIT 1;
    SQL

    DB[:conn].execute(sql)[0]["id"]
  end

end

Pry.start
