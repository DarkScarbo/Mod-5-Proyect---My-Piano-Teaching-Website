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

export default { logInApi, signUpApi, validate };

// fetch("http://localhost:3000/signup", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     name: "Fran",
//     email: "francisco.costa@gmail.com",
//     password: "fran"
//   })
// }).then(resp => resp.json())
