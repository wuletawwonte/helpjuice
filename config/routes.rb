Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    unauthenticated :user do
      root "devise/sessions#new"
    end

    authenticated :user do
      root "posts#index", as: :authenticated_root
    end
  end

  get "home/index"
end
