const country = document.getElementById("country");
const derece = document.getElementById("derece");
const info = document.getElementById("info");
let data;

const apiKey = "8c082e67fb0e269bb3f60c7919b4dc22";

function hava() {
  let city = document.getElementById("searchCity").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=az&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      if (data.sys.country == undefined ) {
        country.innerHTML = "Respublika tapılmadı";
      } else if (data.name == undefined || data.sys.country == undefined) {
        country.innerHTML = "Tapılmadı";
      } else {
        country.innerHTML = `${data.name}, ${data.sys.country}`;
        derece.innerHTML = `max: ${Math.floor(data.main.temp_max) - 273}° / min: ${Math.floor(data.main.temp_min - 273)}°`;
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
