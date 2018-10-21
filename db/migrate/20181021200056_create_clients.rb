class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :uid
      t.string :email
      t.string :image
      t.timestamps null: false
    end
  end
end
