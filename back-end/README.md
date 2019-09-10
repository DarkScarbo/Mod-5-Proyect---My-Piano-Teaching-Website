## Server

The back-end is built in Ruby on Rails with a PostgreSQL database, using an object-oriented programming approach. The app has 5 models: User, Booking, Message, Video and Review.

- A User can be either a Teacher or a Student.
- A User has many Bookings
- A Booking belongs both to a Teacher and a Student.
- A User has many Messages.
- A Message belongs both to a Teacher and a Student.
- A Teacher has many Students and a Student belongs to one Teacher.
- A Student has many Videos.
- A Video has one Review.
- A Teacher has many Reviews.

There are API endpoints for all models. The app uses mainly the User endpoint. Authentication and authorisation are done with Ruby on Rails, using bcrypt for encyption.
