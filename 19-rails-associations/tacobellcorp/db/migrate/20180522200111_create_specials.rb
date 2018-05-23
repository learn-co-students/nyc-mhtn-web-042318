class CreateSpecials < ActiveRecord::Migration[5.1]
  def change
    create_table :specials do |t|
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
