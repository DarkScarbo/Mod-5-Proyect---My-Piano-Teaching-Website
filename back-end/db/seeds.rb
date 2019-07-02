# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Video.destroy_all
Booking.destroy_all
Message.destroy_all
User.destroy_all


xabi = User.create(name: "Xabier", email: "xabi.casan.piano@gmail.com", typeOfUser: "teacher", password: "xabier", teacher_id: nil)
harriet = User.create(name: "Harriet", email: "harriet.ballantyne@gmail.com", typeOfUser: "student", password: "harriet", teacher_id: xabi.id)

message_one = Message.create(text: "Hey Xabi! I need a piano teacher! Are you available", student_id: harriet.id, teacher_id: xabi.id, creator_id: harriet.id)
message_two = Message.create(text: "Hey Harriet! Yes, I would love to be your piano teacher !", student_id: harriet.id, teacher_id: xabi.id, creator_id: xabi.id)

booking_one = Booking.create(date: "2019/07/26", teacher_id: xabi.id, student_id: harriet.id, confirmed: "", starting: "2019-07-26 17:00", ending: "2019-07-26 18:30", creator_id: xabi.id)
harriet_playing_ondine = Video.create(url: "https://www.youtube.com/watch?v=94SrLeiKJ-0", title: "Harriet playing Ondine, by Ravel", description: "Recorded in 2010/06/20", user_id: harriet.id)
harriet_playing_ondine_review = Review.create(video: harriet_playing_ondine, user_id: xabi.id, text: "very well done!")