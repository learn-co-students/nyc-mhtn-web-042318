class CreateContractsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :contracts do |t|
      t.integer :trainer_id
      t.integer :gym_id
    end
  end
end
