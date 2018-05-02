class CreateMoviesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :rating
    end
  end
end
