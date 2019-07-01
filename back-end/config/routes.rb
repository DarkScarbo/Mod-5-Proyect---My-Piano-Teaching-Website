Rails.application.routes.draw do
  resources :users
  resources :videos
  resources :reviews
  resources :messages
  resources :bookings
  post '/signup', to: 'users#signup'
  post '/signin', to: 'users#signin'
end
