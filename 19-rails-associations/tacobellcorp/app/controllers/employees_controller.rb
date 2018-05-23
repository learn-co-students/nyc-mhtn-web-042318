class EmployeesController < ApplicationController
  before_action :get_employees, only: [:show, :edit, :update, :destroy]
  before_action :get_franchises, only: [:new, :edit]

  def index
    @employees = Employee.all
  end

  def show
  end

  def new
    @employee = Employee.new
  end

  def create
    @employee = Employee.create(employee_params)
    if @employee.valid?
      redirect_to @employee
    else
      flash[:errors] = @employee.errors.full_messages
      redirect_to new_employee_path
    end
  end

  def edit
  end

  def update
    @employee.update(employee_params)
    if @employee.valid?
      redirect_to @employee
    else
      flash[:errors] = @employee.errors.full_messages
      redirect_to edit_employee_path(@employee)
    end
  end

  def destroy
    @employee.delete
    redirect_to employees_path
  end

  private

  def get_employees
    @employee = Employee.find(params[:id])
  end

  def get_franchises
    @franchises = Franchise.all.sort_by { |f| f.city }
  end

  def employee_params
    params.require(:employee).permit(:name, :franchise_id)
  end
end
