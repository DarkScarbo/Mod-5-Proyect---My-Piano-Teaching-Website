export function logInApi(email, password) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  }).then(resp => resp.json());
}

export function validate() {
  return fetch("http://localhost:3000/validate", {
    headers: { Authorisation: localStorage.token }
  }).then(resp => resp.json());
}

export function signUpApi(name, email, password) {
  return fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  }).then(resp => resp.json());
}

export function postVideo(url, title, description, student_id) {
  return fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, title, description, student_id })
  }).then(resp => resp.json());
}

export function postBooking(
  date,
  starting,
  ending,
  confirmed,
  student_id,
  creator_id,
  teacher_id
) {
  return fetch("http://localhost:3000/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date,
      starting,
      ending,
      confirmed,
      student_id,
      creator_id,
      teacher_id
    })
  }).then(resp => resp.json());
}

export function postMessage(text, creator_id, student_id, teacher_id) {
  return fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, creator_id, student_id, teacher_id })
  }).then(resp => resp.json());
}
export function updateBooking(confirmed, id) {
  return fetch("http://localhost:3000/bookings" + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ confirmed: confirmed })
  }).then(resp => resp.json());
}

export function postReview(text, video_id, teacher_id) {
  return fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, video_id, teacher_id })
  }).then(resp => resp.json());
}

export default {
  logInApi,
  signUpApi,
  validate,
  postVideo,
  postBooking,
  postMessage,
  updateBooking,
  postReview
};

// fetch("http://localhost:3000/signup", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     name: "Fran",
//     email: "francisco.costa@gmail.com",
//     password: "fran"
//   })
// }).then(resp => resp.json())
