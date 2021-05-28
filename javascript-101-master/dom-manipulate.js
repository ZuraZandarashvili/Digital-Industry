// let title = document.getElementById('testId');
// setTimeout( () => {title.style.color = 'green'; console.log('after set timeout')}, 0 );
// console.log('before set Time out', title, title instanceof HTMLElement);
// console.log(title, title instanceof HTMLElement);


// let tags = document.getElementsByTagName('h1');
// console.log(tags, tags instanceof HTMLCollection)

// for (let tag of tags) {
//     tag.style.color = "blue";
// }

// setTimeout( () =>  {
// let classes = document.querySelectorAll('.tangerine-font');
// console.log(classes)
// for (elem of classes) {
//     console.log(elem.innerHTML);
// console.log(elem.innerText);
//     elem.innerHTML +=  '<span style="font-weight: bold"> TESTED</span> Case'
//     elem.style.fontFamily = 'Tangerine';
//     elem.style.fontSize = '23px';
// }
// }, 4000)


// let title = document.querySelector('h1');
// setTimeout( () => {title.style.color = 'green'; console.log('after set timeout')}, 3000 );
// console.log('before set Time out', title, title instanceof HTMLElement);
// console.log(title, title instanceof HTMLElement);
// let tag = document.getElementById('testId');
// console.log('h1 #testId has child  nodes ?', tag.remove());

// let tagClone = tag.cloneNode(true);
// console.log(tagClone);
// document.getElementsByTagName('p')[0].prepend(tagClone);


// let testId = document.getElementById('testId');
// console.log(testId.classList);
// console.log(testId.removeAttribute('class'));
// testId.classList.toggle('new-class');
// console.log(testId.classList);

// let isMenuOpen = false;
// function openMenu() {
//     if (isMenuOpen) {
//         document.getElementById('menu').style.display = 'none';
//         document.querySelector('.content').style.width = '100%';
//     } else {
//         document.getElementById('menu').style.display = 'block';
//         document.querySelector('.content').style.width = '70%';
//     }
//     isMenuOpen = !isMenuOpen;
// }

// let button = document.getElementById('menu-button');
// button.addEventListener("click", openMenu);
// button.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("button clicked");
// });
// let divHeader = document.querySelector(".header");
// divHeader.addEventListener("click", () => {
//     console.log('header clicked')
//     divHeader.style.backgroundColor = "red";
// });


// window.addEventListener("mousedown", (event) => {
//  console.log(event.target)
// if (event.button === 0) {
//     console.log('მარცხენა ღილაკი');
// } else if (event.button === 1) {
//     console.log('შუა ღილაკი');
// } else 
//     if (event.button === 2) { 
//         event.preventDefault();
//         event.stopPropagation();
//        return;
//     }
// })

// window.addEventListener("click", (event) => {
//  console.log('single click', event.target)
// })

// window.addEventListener("dblclick", (event) => {
//     console.log('double click', event.target)
//    })



// document.body.addEventListener("click", event => {
//     if (event.target.nodeName === "BUTTON") {
//         console.log('clicked', event.target.textContent);
//     }
// });


// document.getElementById('redirect').addEventListener('click', (event) => {
//     event.preventDefault();
//     alert('no money no honey');
// })
// let created = false;
// window.addEventListener("keydown", event => {
//     if(event.shiftKey) {
//         console.log('დავაჭირე shift -ს')
//     }

//     if(event.key === " " && event.ctrlKey) {
//         alert('bingooo')
//     }
//  console.log(event.shiftKey);
//     switch (event.key.toUpperCase()) {
//         case 'C':
//             if(!created) {
//                 let button = document.createElement('button');
//                 button.innerText = 'clickme';
//                 button.classList.add('fake-button');
//                 document.body.append(button);

//             }
//             created = true;
//             break;
//         case 'B':
//             document.body.style.backgroundColor = 'black';
//             break;

//         default:
//             break;
//     }
// })


// window.addEventListener("keyup", event => {

//     switch (event.key.toUpperCase()) {
//         case 'C':
//                 let buttons = document.getElementsByClassName('fake-button');
//                 for( let button of buttons) {
//                     button.remove();
//                 }
//                 created = false;
//             break;
//         case 'B':
//             document.body.style.backgroundColor = '';
//             break;

//         default:
//             break;
//     }
// })

// window.addEventListener("click", event => {
//     console.log(event)
//     let dot = document.createElement("div");
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 5) + 'px';

//     dot.style.top = (event.pageY - 5) + 'px';

//     document.body.appendChild(dot);
// })
// let lastX;
// let resizedDiv = document.querySelector('.resize-div');
// resizedDiv.addEventListener("mousedown", event => {
//     console.log('mouse down', event.clientX);
//     if (event.button === 0) {
//         lastX = event.clientX;
//         window.addEventListener("mousemove", mooved);
//     }
// })

// function mooved(event) {
//     console.log('mooved ', event);
//     if(event.buttons === 0) {

//         window.removeEventListener("mousemove", mooved);
//     } else {
//         let growth = event.clientX - lastX;
//         let newWidth = Math.max(10,resizedDiv.offsetWidth + growth);
//         resizedDiv.style.width = newWidth +  "px";
//         lastX = event.clientX;
//     }
// }
// function update(event) {
    
//     console.log(event)
    // for( let dot; dot = document.querySelector(".dot");) {
    //     dot.remove();
    // }
//     for (let i = 0; i < event.touches.length; i++) {

//         let pageX = event.touches[i] && event.touches[i].pageX;
//         let pageY = event.touches[i] && event.touches[i].pageY;
//         let dot = document.createElement("div");
//         dot.className = "dot";
//         dot.style.left = (pageX - 5) + 'px';

//         dot.style.top = (pageY - 5) + 'px';

//         document.body.appendChild(dot);
//     }
// }

// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);

// document.body.appendChild(document.createTextNode("just as usmpe".repeat(1000)));

// let progress  = document.querySelector("#progress");
// window.addEventListener("scroll", () => {
//     let counter = document.body.scrollHeight  - window.innerHeight;
//     console.log(window.pageYOffset, counter);
//     progress.style.width = (window.pageYOffset / counter ) * 100 + "%";
// })