Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :owners, only: [:index]
    end
    namespace :v2 do
      resources :owners, only: [:index,:create]
    end
  end


  #'http://pets.com/admin/reset_admin_password'
  namespace :admin do
    get '/reset_admin_password', to:'password#reset'
  end

end
