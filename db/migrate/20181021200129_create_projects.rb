class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.boolean :completed
      t.integer :client_id
      t.integer :manager_id


      t.timestamps null: false
    end
  end
end
