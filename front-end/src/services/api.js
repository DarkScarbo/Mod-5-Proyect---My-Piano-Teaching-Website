export function signin(email, password) {
  return fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  }).then(resp => resp.json());
}

// fetch("http://localhost:3000/signup", {
//     method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({ name: "Fran", email: "francisco.costa@gmail.com", password: "fran"})
// }).then(resp => resp.json())

export default { signin };
