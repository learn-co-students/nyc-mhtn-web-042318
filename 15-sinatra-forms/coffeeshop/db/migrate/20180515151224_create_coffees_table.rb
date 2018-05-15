class CreateCoffeesTable < ActiveRecord::Migration
  def change
    create_table :coffees do |t|
      t.string :origin
      t.integer :price
    end
  end
end
