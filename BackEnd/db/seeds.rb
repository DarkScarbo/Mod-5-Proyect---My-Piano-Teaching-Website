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
Student.destroy_all
Teacher.destroy_all


xabi = Teacher.create(name: "Xabier", email: "xabier_abia@hotmail.com", password: "xabier")
harriet = Student.create(name: "Harriet", email: "harriet.ballantyne@gmail.com", password: "harriet")

mes_one = Message.create(text: "Hey Xabi! I need a piano teacher! Are you available", student: harriet, teacher: xabi)
mes_two = Message.create(text: "Hey Harriet! Yes, I would love to be your piano teacher !", student: harriet, teacher: xabi)

booking_one = Booking.create(date: "2019/07/26", student: harriet, teacher: xabi, confirmed: "", starting: "2019-07-26 17:00", ending: "2019-07-26 18:30")
harriet_playing_ondine = Video.create(url: "https://www.youtube.com/watch?v=94SrLeiKJ-0", title: "Harriet playing Ondine, by Ravel", description: "Recorded in 2010/06/20", student: harriet)
harriet_playing_ondine_review = Review.create(video: harriet_playing_ondine, teacher: xabi, text: "very well done!")