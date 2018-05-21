class CreateCupcakes < ActiveRecord::Migration[5.1]
  def change
    create_table :cupcakes do |t|
      t.string :flavor
      t.integer :price

      t.timestamps
    end
  end
end
