## Piano teacher platform
This is a platform that shows my website as a pianist, then, a student can sign up or log in and make bookings, upload videos of themselves playing and have messages with me. As a teacher, I can log in and accept or refuse bookings, write a review for each video and have messeges with all the students. The App uses its own API for storing all the data.

## Motivation
This is the fifth and last proyect for the Flatiron School Software Engineering bootcamp. The basic requirements for this project are the use of Ruby on Rails for the back-end an React for the front-end.

## Server
The backend it's built in Ruby on Rails with a PostgreSQL database, using an object-oriented programming approach. The app has 5 models: User, Booking, Message, Video and Review.

A User can be both a Teacher or a Student.
A User has many Bookings
A Booking belongs to a Teacher and a Student. 
A User has many Messages.
A Message belongs to a Teacher and a Student.
A Teacher has many Students and a Student belongs to a Teacher.
A Student has many Videos.
A Video has a Review.
A Teacher has many reviews.

There are API endpoints for all models. The app uses mainly the User endpoint. Authentication is done through a Rails sessions controller, using bcrypt for encyption.

## Client
The client-side of the application is built in React. The style is done by a combination of Semantic and CSS.

## Screenshots and Gifs
About:
![About](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/About.png)
Reviws:
![Reviws](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Reviews.png)
Lessons:
![Lessons](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Lessons.png)
Contact:
![Contact](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Contact.png)
Log in:
![Sign up or Log in](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/LogIn.png)

![Make a Booking as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Booking.gif)
![Post a Video as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Video.gif)
![Send a Message as a Student](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Student-Message.gif)

![Accept/Reject a Booking as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Booking.gif)
![Make a Review to a Video as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Video.gif)
![Send a Message as a as a Teacher](https://github.com/DarkScarbo/Mod-5-Project---My-Piano-Teaching-Website/blob/master/front-end/public/Teacher-Message.gif)
