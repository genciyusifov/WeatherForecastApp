const country = document.querySelector(".location");
const derece = document.querySelector(".temperature")
const info = document.querySelector(".description");
const png = document.querySelector(".icon")
const png2 = document.querySelector(".icon2")
let data;

const apiKey = "8c082e67fb0e269bb3f60c7919b4dc22";

function hava() {
  let city = document.getElementById("searchCity").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=az&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);
      if (data.sys.country == undefined ) {
        country.innerHTML = "Respublika tapılmadı";
      } else if (data.name == undefined || data.sys.country == undefined) {
        country.innerHTML = "Tapılmadı";
        png.innerHTML = ""
        png2.innerHTML = ""
      } else {
        country.innerHTML = `${data.name}, ${data.sys.country}`;
        png.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="png"/>`
        png2.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="png"/>`
        if(Math.floor(data.main.temp_max) - 273 == Math.floor(data.main.temp_min) - 273){
          derece.innerHTML = ` ${Math.floor(data.main.temp_max) - 273}° `
        }else derece.innerHTML = `min: ${Math.floor(data.main.temp_min) - 273}° / max: ${Math.floor(data.main.temp_max - 273)}°`;
        let x = data.weather[0].description;
        info.innerHTML = x.charAt(0).toUpperCase() + x.slice(1); 
      }
    })
    .catch(function (error) {
        console.log(error);
      country.innerHTML = "Tapılmadı";
      derece.innerHTML = "";
      info.innerHTML = "";
    });
}

// Ganji Yusifov
