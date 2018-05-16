class CreateSectionsAnimalsAndVisitorsTables < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name
    end

    create_table :animals do |t|
      t.string :name
      t.integer :section_id
    end

    create_table :visitors do |t|
      t.string :name
    end

    create_table :favorites do |t|
      t.integer :animal_id
      t.integer :visitor_id
    end
  end
end
