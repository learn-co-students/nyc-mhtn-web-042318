class CreateFranchiseSpecials < ActiveRecord::Migration[5.1]
  def change
    create_table :franchise_specials do |t|
      t.references :franchise, foreign_key: true
      t.references :special, foreign_key: true

      t.timestamps
    end
  end
end
