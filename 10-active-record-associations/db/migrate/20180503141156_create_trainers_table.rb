class CreateTrainersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :trainers do |t|
      t.string :name
    end
  end
end
