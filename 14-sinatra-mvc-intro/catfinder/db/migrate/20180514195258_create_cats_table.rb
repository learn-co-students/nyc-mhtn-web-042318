class CreateCatsTable < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
    end
  end
end
