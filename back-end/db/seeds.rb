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
fran = User.create(name: "Fran", email: "francisco.costa@gmail.com", typeOfUser: "student", password: "fran", teacher_id: xabi.id)

message_one = Message.create(text: "Hey Xabi! I need a piano teacher! Are you available?", student_id: harriet.id, teacher_id: xabi.id, creator_id: harriet.id)
message_two = Message.create(text: "Hi Harriet! Yes, I would love to be your piano teacher! What are you working on?", student_id: harriet.id, teacher_id: xabi.id, creator_id: xabi.id)
message_three = Message.create(text: "I'm currently playing 'Gaspard de la nuit', by Ravel, and I have a concert very soon.", student_id: harriet.id, teacher_id: xabi.id, creator_id: harriet.id)
message_four = Message.create(text: "Perfect! I know that work very well, I can give you lots of tips.", student_id: harriet.id, teacher_id: xabi.id, creator_id: xabi.id)
message_five = Message.create(text: "Hi Xabi, I'm playing Cants Magics, by Mompo, and I need some help. Are you able to help me?", student_id: fran.id, teacher_id: xabi.id, creator_id: fran.id)
message_six = Message.create(text: "Hi Fran, of course! Spanish Music is one of my specialities", student_id: fran.id, teacher_id: xabi.id, creator_id: xabi.id)


booking_one = Booking.create(date: "2019/06/26", teacher_id: xabi.id, student_id: harriet.id, confirmed: "Yes", starting: "17:00", ending: "18:30", creator_id: xabi.id)
booking_two = Booking.create(date: "2019/07/3", teacher_id: xabi.id, student_id: harriet.id, confirmed: "", starting: "18:00", ending: "19:30", creator_id: xabi.id)
booking_three = Booking.create(date: "2019/07/1", teacher_id: xabi.id, student_id: fran.id, confirmed: "", starting: "18:00", ending: "19:30", creator_id: xabi.id)

harriet_playing_ondine = Video.create(url: "94SrLeiKJ-0", title: "Harriet playing Ondine, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_le_gibet = Video.create(url: "3PQ-H1PjrWQ", title: "Harriet playing Le Gibet, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_scarbo = Video.create(url: "VBgwk98ZPuI", title: "Harriet playing Scarbo, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_satanic_poem = Video.create(url: "xUWVPuSA1PI", title: "Harriet playing Poeme Satanique Op.36, by Scriabin", description: "Recorded in 2019/07/05", student_id: harriet.id)
fran_playing_cantos_magicos = Video.create(url: "pLKedWPEc-U", title: "Fran playing Cants Magics, by Mompou", description: "Recorded in 2019/06/30", student_id: fran.id)

harriet_playing_ondine_review = Review.create(video: harriet_playing_ondine, teacher_id: xabi.id, text: "This is amazing. You create such a beautiful aquatic atmosphera during all the piece. The climax on 03:39 is specially well conducted, You could improve your back posture though.")
harriet_playing_le_gibet_review = Review.create(video: harriet_playing_le_gibet, teacher_id: xabi.id, text: "Very well done. The obstinato suggesting a bell during all the piece is unmissable. My only concern is the speed, it would sound more misterious at a slower tempo.")
harriet_playing_scarbo_review = Review.create(video: harriet_playing_scarbo, teacher_id: xabi.id, text: "Unbeliveable. You make the contrast within the sections ver well. The intermediate section from 5:49 could sound more misterious by playing it more piano. ")