// შედით სამივეზე და ნახეთ რა ინფორმაციის წამოღება შეგიძლიათ თითოეულიდან.
// fetch ის გამოყენებით, თითოეული საიტიდან მინიმუმ ერთ API გამოიყენეთ და 
// წამოიღეთ ინფორმაცია, დამუშავებული რისფონსი დალოგეთ კონსოლში.

// fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01')
//     .then(response => response.json())
//     .then(finalDate => {
//         if (finalDate.code === 200) {
//             const ul = document.querySelector('ul');
        
//             finalDate.data.forEach(item => {
//                 const li = document.createElement('li');
//                 li.textContent = item.email + item.phone;
//                 ul.appendChild(li);
//             })
//         } else {
//             console.log(err);
//         }
//     })
//     .catch(err => {
//         const p = document.createElement('p')
//         document.body.appendChild(p)
//         p.textContent = 'status code' + err;
//         p.style.color = 'red';
//         console.log(err);
//     })


// advanced:
// *დაწერეთ ასინქრონული ფუნქცია, რომელიც გაამარტივებს მონაცემების წამოღება-დამუშავების 
// პროცესებს(შეგიძლიათ გამოიყენოთ ლექციაზე დაწერილი ვერსია, მაგრამ გაითვალისწინეთ რომ სხვადასხვა api განსხვავებულად გვიბრუნებს მონაცემებს)
// *წარმატებით დაბრუნებული მონაცემების შემთხვევაში html ში დავამატოთ დაბრუნებული ინფორმაციიდან 
// კონტენტი(ლექციაზე განხილული მაგალითის მსგავსად)
// *წარუმატებელი პასუხის შემთხვეგვაში html ში დავამატოთ შესაბამისი ერორ მესიჯი.

function errorMsg(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    p.style.color = 'red';
    document.body.appendChild(p);
}

function axios(url = 'https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01') {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(finalData => {
                // console.log(finalData)
                if (finalData.code === 200) {
                    resolve(finalData)
                } else {
                    throw finalData.code
                }
            })

            .catch(err => {
                reject(err)
            })
    })

}
axios()
    .then(value => {
        console.log(value)
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
            
        value.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            ul.appendChild(li);
        })
    })
    .catch(err => {
        errorMsg(err);
    })
// 3) https://fakerapi.it/en

    axios('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01')
    .then(value => {
        console.log(value)
        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        value.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.email;
            ul.appendChild(li);
        })
    })
    .catch(err => {
        errorMsg(err);
    })
// 2) https://jsonplaceholder.typicode.com/

axios('https://jsonplaceholder.typicode.com/users')
.then(value => {
    console.log(value)
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    value.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.user;
        ul.appendChild(li);
    })
   
})
.catch(err => {
    errorMsg(err);
})

// 1) https://reqres.in/

axios('https://reqres.in/api/unknown')
.then(value => {
    console.log(value)
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    value.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.color;
        ul.appendChild(li);
    })
   
})
.catch(err => {
    errorMsg(err);
})