Rails.application.routes.draw do
  resources :bookings, only: [:index]
end
