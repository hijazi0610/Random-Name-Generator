window.onload = () => {
    randomUserGenerator();
}

const randomUserGenerator = () => {
    fetch('https://randomuser.me/api')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector('.info').innerHTML = `
        <h1>Refresh the page</h1><br>
        <h1>Name</h1><p id="name">${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</p>
        <h1>Age</age><p id="age">${data.results[0].dob.age}</p>
        <h1>Email</h1><p id="email">${data.results[0].email}</p>
        <h1>Phone</h1><p id="phone">${data.results[0].phone}</p>
        `
    })
}