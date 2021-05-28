window.onload = () => {
    document.querySelector('#btnSubmit').addEventListener('click', getData);
}
function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        let out = '<h2 class = "mt-3 mb-2">Data of Users</h2>'

        data.forEach(user => {
            out += `
                <ul class = "list-group mb-3">
                    <li class = "list-group-item text-primary"> Name: ${user.name}</li>
                    <li class = "list-group-item text-secondary">Email: ${user.email}</li>
                    <li class = "list-group-item text-secondary">Website: ${user.website}</li>
                    <li class = "list-group-item text-secondary">Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</li>
                    <li class = "list-group-item text-secondary"> Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</li>
                    <li class = "list-group-item text-secondary"> Phone: ${user.phone}</li>
                    <li class = "list-group-item text-secondary"> Website: ${user.website}</li>
                    <li class = "list-group-item text-secondary"> Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs } </li>  
                    
                    <li class = "list-group-item text-secondary"><a href="Posts.html">
                        <button class = "btn btn-danger mt-3"> Posts</button>
                        </a>
                </ul>
            `
        });
        document.querySelector('#result').innerHTML = out;
    })
}
function buttonClick() {
    var text = document.getElementById("result");
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";      
    }
  }
