## Piano teacher platform

This is a platform for a piano teacher to use to manage their students. A student can sign up or log in and make bookings, upload videos of themselves playing and have messages with their teacher. The teacher can log in and accept or refuse bookings, write a review for each video and have messages with all their students. The App uses its own API for storing all the data.

## Motivation

This is my fifth and final project on the Flatiron School Software Engineering Bootcamp course. The requirements for this project were the use of Ruby on Rails for the back-end and React for the front-end, plus the use of additional features.

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

## Client

The client-side of the application is built in React. The style is a combination of Semantic-React-UI and CSS.

## Initialization

1. Clone and open the project in a code editor.
2. Go into the back-end folder.
3. Run `bundle install`.
4. Run `rails db:migrate` and `rails db:seed`.
5. Run `rails s`.
6. Go to the front-end folder.
7. Run `npm install`.
8. Run `npm start`.

## Screenshots and Gifs

About:
![About](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/About.png)
Reviews:
![Reviews](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Reviews.png)
Lessons:
![Lessons](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Lessons.png)
Contact:
![Contact](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Contact.png)
Log in:
![Sign up or Log in](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/LogIn.png)

---

Make a Booking as a Student:
![Make a Booking as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Booking.gif)
Post a Video as a Student:
![Post a Video as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Video.gif)
Send a Message as a Student:
![Send a Message as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Message.gif)

Accept/Reject a Booking as a Teacher:
![Accept/Reject a Booking as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Booking.gif)
Make a Review to a Video as a Teacher:
![Make a Review to a Video as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Video.gif)
Send a Message as a as a Teacher:
![Send a Message as a as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Message.gif)
