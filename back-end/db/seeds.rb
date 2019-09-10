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
dunia = User.create(name: "Dunia", email: "dunia.al-baghdadi@gmail.com", typeOfUser: "student", password: "dunia", teacher_id: xabi.id)
fran = User.create(name: "Fran", email: "francisco.costa@gmail.com", typeOfUser: "student", password: "fran", teacher_id: xabi.id)

message_one = Message.create(text: "Hey Xabi! I need a piano teacher! Are you available?", student_id: harriet.id, teacher_id: xabi.id, creator_id: harriet.id)
message_two = Message.create(text: "Hi Harriet! Yes, I would love to be your piano teacher! What are you working on?", student_id: harriet.id, teacher_id: xabi.id, creator_id: xabi.id)
message_three = Message.create(text: "I'm currently playing 'Gaspard de la nuit', by Ravel, and I have a concert very soon.", student_id: harriet.id, teacher_id: xabi.id, creator_id: harriet.id)
message_four = Message.create(text: "Perfect! I know that work very well. I can give you lots of tips.", student_id: harriet.id, teacher_id: xabi.id, creator_id: xabi.id)
message_five = Message.create(text: "Hi Xabi, I'm playing Cants Magics, by Mompou, and I need some help. Are you able to help me?", student_id: fran.id, teacher_id: xabi.id, creator_id: fran.id)
message_six = Message.create(text: "Hi Fran, of course! Spanish Music is one of my specialities.", student_id: fran.id, teacher_id: xabi.id, creator_id: xabi.id)


booking_one = Booking.create(date: "15-09-2019", teacher_id: xabi.id, student_id: harriet.id, confirmed: "Yes", starting: "17:00", ending: "18:30", student_name: harriet.name, student_email: harriet.email)
booking_two = Booking.create(date: "17-09-2019", teacher_id: xabi.id, student_id: harriet.id, confirmed: "", starting: "18:00", ending: "19:30", student_name: harriet.name, student_email: harriet.email )
booking_three = Booking.create(date: "21-09-2019", teacher_id: xabi.id, student_id: harriet.id, confirmed: "", starting: "18:30", ending: "20:00", student_name: harriet.name, student_email: harriet.email )
booking_four = Booking.create(date: "22-09-2019", teacher_id: xabi.id, student_id: fran.id, confirmed: "Yes", starting: "18:00", ending: "19:30", student_name: fran.name, student_email: fran.email )
booking_five = Booking.create(date: "16-09-2019", teacher_id: xabi.id, student_id: fran.id, confirmed: "", starting: "17:30", ending: "19:00", student_name: fran.name, student_email: fran.email )
booking_six = Booking.create(date: "20-09-2019", teacher_id: xabi.id, student_id: dunia.id, confirmed: "", starting: "17:00", ending: "18:30", student_name: dunia.name, student_email: dunia.email )

harriet_playing_ondine = Video.create(url: "94SrLeiKJ-0", title: "Harriet playing Ondine, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_le_gibet = Video.create(url: "3PQ-H1PjrWQ", title: "Harriet playing Le Gibet, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_scarbo = Video.create(url: "VBgwk98ZPuI", title: "Harriet playing Scarbo, from Gaspard de la nuit, by Ravel", description: "Recorded in 2019/06/20", student_id: harriet.id)
harriet_playing_satanic_poem = Video.create(url: "xUWVPuSA1PI", title: "Harriet playing Poeme Satanique Op.36, by Scriabin", description: "Recorded in 2019/07/05", student_id: harriet.id)
fran_playing_cantos_magicos = Video.create(url: "pLKedWPEc-U", title: "Fran playing Cants Magics, by Mompou", description: "Recorded in 2019/06/30", student_id: fran.id)

harriet_playing_ondine_review = Review.create(video: harriet_playing_ondine, teacher_id: xabi.id, text: "This is amazing. You create such a beautiful aquatic atmosphere during the piece. The climax at 03:39 is especially well conducted. You could improve your back posture though.")
harriet_playing_le_gibet_review = Review.create(video: harriet_playing_le_gibet, teacher_id: xabi.id, text: "Very well done. The obstinato suggesting a bell during the piece is well present. My only concern is the speed; it would sound more mysterious at a slower tempo.")
harriet_playing_scarbo_review = Review.create(video: harriet_playing_scarbo, teacher_id: xabi.id, text: "Unbelieveable. You make the contrast within the sections very well. The intermediate section from 05:49 could sound more mysterious by playing it more quietly. ")