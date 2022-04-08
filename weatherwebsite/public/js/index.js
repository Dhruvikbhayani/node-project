const cityname = document.getElementById('cityname')
const submitbutton = document.getElementById('submitbutton')
const city_name = document.getElementById('city_name')

const temp_re = document.getElementById('temp_re')
const temp_status = document.getElementById('temp_status')

const datahidle = document.querySelector('.middle_layer')


// async function fun1(event) {
//     event.preventDefault();
//     let cityval = cityname.value
//     if (cityval === "") {
//         city_name.innerText = `Plz write the name before search`;
//         datahidle.classList.add('data_hide')
//     } else {
//         try {

//             let uri = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b3a9902a00786c64bf2ec4bceca47fcb`
//             const reponse = await fetch(uri);
//             const data = await reponse.json()
//             const arrdata = [data]

//             city_name.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`;
//             temp_re.innerText = arrdata[0].main.temp
//             temp_status.innerText = arrdata[0].weather[0].main;

//             const tempStatus = arrdata[0].weather[0].main

//             if (tempStatus == "Sunny") {
//                 weathercon.innerHTML =
//                     "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
//             } else if (tempStatus == "Clouds") {
//                 weathercon.innerHTML =
//                     "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
//             } else if (tempStatus == "Rainy") {
//                 weathercon.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
//             } else {
//                 weathercon.innerHTML = "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
//             }
//             datahidle.classList.remove('data_hide')
//         } catch {
//             city_name.innerText = `Plz enter city name`;
//             datahidle.classList.add('data_hide')

//         }
//     }

// }
submitbutton.addEventListener('click', async(event) => {
    event.preventDefault();
    let cityval = cityname.value
    console.log(city_name.value)
    if (cityval === "") {
        city_name.innerText = `Plz write the name before search`;
        datahidle.classList.add('data_hide')
    } else {
        try {

            let uri = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b3a9902a00786c64bf2ec4bceca47fcb`
            const reponse = await fetch(uri);
            const data = await reponse.json()
            const arrdata = [data]

            city_name.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`;
            temp_re.innerText = arrdata[0].main.temp
            temp_status.innerText = arrdata[0].weather[0].main;

            const tempStatus = arrdata[0].weather[0].main

            if (tempStatus == "Sunny") {
                weathercon.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                weathercon.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rainy") {
                weathercon.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                weathercon.innerHTML = "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }
            datahidle.classList.remove('data_hide')
        } catch {
            city_name.innerText = `Plz enter city name`;
            console.log("Plz enter city name")
            datahidle.classList.add('data_hide')

        }
    }

})