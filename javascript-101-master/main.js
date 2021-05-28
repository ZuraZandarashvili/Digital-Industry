function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Error happend loading ' + script.src))
        console.log('start loading', script)
        document.head.append(script);
    });
}

// function loadScrip2 () {
//     let scriptLoad = loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquer-ui.min.js');
//     scriptLoad.then(
//         script => console.log(script.src + 'script2 loaded!'),
//         error => console.error('script2  Error: ' + error.message )
//     )
// }

// let promise = loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js');
//     promise.then(
//         script => console.log(script , ' 1 loaded!') ,
//         error => console.error('1 Error: ' , error.message )
//     )

//     let scriptLoad = loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');
//     scriptLoad.then(
//         script => console.log(script , ' script2 loaded!'),
//         error => console.error('script2  Error: ' , error.message )
//     )

async function f() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("ვერ დასრულდა")), 1000)
        })
        let result = await promise;
        console.log(typeof result)
    } catch (err) {
        console.error(err.message)
    }

}

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => data.json())
    .then(response => {
        let p = document.createElement('p');
        p.innerText = '---id:  ' + response.id + '\n'
            + '--------------------------------------- \n'
            + '---title:  ' + response.title + '\n'

            + '--------------------------------------- \n'
            + '---body:  ' + response.body + '\n'

            + '--------------------------------------- \n'
            + '---userId:  ' + response.userId + '\n';
        document.body.append(p);
    })


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(data => data.json())
    .then(resp => console.log(resp));
// f()


// loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
//     function (error, script) {
//         // ... ragacas aketebs
//         if (error) {
//             //handle
//             console.error(error.message)
//         } else {
//             console.log('script loaded 1', script)
//             loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquer-ui.min.js',
//                 function (error, script) {
//                     if (error) {
//                         //handle
//                         console.error(error.message)
//                     } else {
//                     console.log('script loaded 2', script)
//                     // ... ragacas aketebs
//                     loadScript('https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js',
//                         function (error, script) {
//                             if (error) {
//                                 //handle
//                                 console.error(error.message)
//                             } else { 
//                             console.log('script loaded 3', script)
//                             }
//                         })
//                     }
//                 })
//         }
//     }
// );
// // loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', makeRedColor);

// function makeRedColor(script) {
//     console.log('loading finished', script)
// }

// let txutmeti = Promise.resolve(15);
// console.log(txutmeti);
// txutmeti.then( value => console.log(value));

// let promise = new Promise(function(resolve, reject) {
  // მომღერალმა გამოუშვა ალბომი resolve
  // ვერ გამოუშვა დროშა ვერ დაკიდა
//   setTimeout( () =>  resolve({resolved: true, data: 15}), 3000);
// setTimeout( () =>  reject(new Error('rejected data! no data!')), 3000)
// });



// promise
// .finally(() => console.log('დასრულდა! არ ვიცი წარმეტებით, თუ წარუმატმბლად, მაგრამ ნამდვიდალ დასრულდა, დაიბეჭდება შედეგი: '))
// .then( 
//     resolved => console.log(resolved),
//     rejected => console.error(rejected)
//     );
