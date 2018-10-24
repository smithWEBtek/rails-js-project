class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :password_digest
      t.string :uid
      t.string :email
      t.string :image
      t.integer :project_id
      t.integer :manager_id
      t.timestamps null: false
    end
  end
end
