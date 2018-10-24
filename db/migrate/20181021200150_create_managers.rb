class CreateManagers < ActiveRecord::Migration
  def change
    create_table :managers do |t|
      t.string :name
      t.string :password_digest
      t.string :uid
      t.string :email
      t.string :image

      t.timestamps null: false
    end
  end
end
