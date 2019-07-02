Rails.application.routes.draw do
  resources :users
  resources :videos
  resources :reviews
  resources :messages
  resources :bookings
  post '/signup', to: 'users#signup'
  post '/login', to: 'users#login'
  get '/validate', to: 'users#validate'
  post '/getstudentsvideos', to: 'users#get_students_videos'
end
