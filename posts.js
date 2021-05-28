window.onload = () => {
    document.querySelector('#btnSubmit').addEventListener('click', getData);
}

function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let out = '<h2 class = "mt-3 mb-3">Posts of Users</h2>'

        data.forEach(user => {
            out += `
                <ul class = "list-group mb-3">
                    <li class = "list-group-item text-primary"> UserId: ${user.userId}</li>
                    <li class = "list-group-item text-secondary"> Title: ${user.title}</li>
                    <li class = "list-group-item text-secondary"> Body: ${user.body}</li>
                    
                   
                    
                    
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
