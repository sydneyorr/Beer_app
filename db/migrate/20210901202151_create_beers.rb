class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :color
      t.integer :rating

      t.timestamps
    end
  end
end
