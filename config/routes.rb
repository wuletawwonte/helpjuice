Rails.application.routes.draw do
  root "posts#index"
  devise_for :users
  # Defines the root path route ("/")
  get "home/index"
end
