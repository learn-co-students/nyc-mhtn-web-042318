class CreateFranchises < ActiveRecord::Migration[5.1]
  def change
    create_table :franchises do |t|
      t.string :city

      t.timestamps
    end
  end
end
