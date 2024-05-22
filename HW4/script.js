// Задачи:

//     Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API(https: //jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.


// const contentEl = document.querySelector('div.content')
// const urlUser = 'https://jsonplaceholder.typicode.com/users';
// const getData = async(url) => {
//     try {
//         const resp = await fetch(url);
//         const data = await resp.json();
//         return data;
//     } catch (error) {
//         console.log(error);

//     }
// }
// const fetchData = await getData(urlUser)
// fetchData.forEach(element => {
//     contentEl.insertAdjacentHTML('beforeend',
//         `<li>${element.name}</li> `
//     );
// });

// contentEl.insertAdjacentHTML('beforeend',
//     `
// <form>
//    <input id="from" class="nameDel" placeholder="Введите пользователя" type="text">
//    <button type="submit" class="buttonDel">Удалить</button>
//   </form>
//   <p class="P"></p>
//   `
// );
// const nameDel = document.getElementById('from');
// const buttonDel = document.querySelector('button.buttonDel')

// buttonDel.addEventListener('click', function(e) {
//     let spis = ''
//     const num = nameDel.value;
//     alert(`Точно хотите удалить ${num}?`);
//     fetchData.forEach(element => {
//         let nam = element.name;
//         if (!nam.includes(num)) {
//             spis += nam + "\n";
//         }

//     });
//     alert(spis)
// })

//Задача 2:
//Необходимо реализовать отрисовку 10 картинок собак из API https: //dog.ceo/dog-api/ с интервалом в 3 секунды.
const nasaUrl = "https://dog.ceo/api/breeds/image/random"
const getData2 = async(url) => {
    try {
        const resp = await fetch(url)
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);

    }
}
const contentEl = document.querySelector('div.content');
async function delayedPhoto() {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const fetchData = await getData2(nasaUrl);
        contentEl.insertAdjacentHTML('beforeend', `<img src = "${fetchData.message}"/>`)
    }
}
delayedPhoto();