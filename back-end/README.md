## Server
The backend it's built in Ruby on Rails with a PostgreSQL database, using an object-oriented programming approach. The app has 5 models: User, Booking, Message, Video and Review.

- A User can be both a Teacher or a Student.
- A User has many Bookings
- A Booking belongs to a Teacher and a Student. 
- A User has many Messages.
- A Message belongs to a Teacher and a Student.
- A Teacher has many Students and a Student belongs to a Teacher.
- A Student has many Videos.
- A Video has a Review.
- A Teacher has many reviews.

There are API endpoints for all models. The app uses mainly the User endpoint. Authentication and authoritation are done with Rails, using bcrypt for encyption.
