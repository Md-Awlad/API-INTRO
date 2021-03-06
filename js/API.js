function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(json => console.log(json))
};

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser(data))
};

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
};
//auto load
// loadPost();

function displayUser(data){
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}

