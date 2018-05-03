class CreateGymsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :location
    end
  end
end
