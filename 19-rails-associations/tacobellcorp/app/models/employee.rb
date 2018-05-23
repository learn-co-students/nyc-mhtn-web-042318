class Employee < ApplicationRecord
  belongs_to :franchise

  def full_name=(full_name)
    self.first_name = full_name.split(" ")[0]
    self.last_name = full_name.split(" ")[1]
  end

  def full_name
    ""
  end
end
