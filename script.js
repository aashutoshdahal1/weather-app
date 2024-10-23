let apikey = "bcddf6d62f31bed1ad3e9e0fc7f85dfc";
const searchbtn = document.querySelector(".searchbtn");
let app__info = document.querySelector(".app__info");
let app = document.querySelector(".app");
const getWeatherData = async () => {
  let p = document.createElement("p");
  p.classList.add("loadingtag");
  p.innerHTML = `Getting Details...`;
  app__info.append(p);
  app.style.height = "fit-content";
  let result = "";
  let cityname = document.querySelector(".inputfield").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(url);
    result = await response.json();
  } catch (error) {
    console.error(error);
  }
  console.log(result);

  let { main, wind } = result;
  let { speed } = wind;
  console.log(speed);

  console.log(main);
  let htmltag = `  <div class="app__info--datas maintemperature">
  <div class = "app__info--title">
  <p>Temperature</p>
  </div>
  <div class = "app__info--data">
          <p class="maintemperatureinfo">${Math.floor(
            main.feels_like
          )} &#8451</p>
          </div>
        </div>
        <div class="app__info--datas feelslike">
          <div class = "app__info--title">
  <p>Feels Like</p>
  </div>
    <div class = "app__info--data">
          <i class="fa-solid fa-temperature-three-quarters"></i>
          <p>${Math.floor(main.feels_like)}</p>
        </div>
        </div>

        <div class="app__info--datas humidity">
          <div class = "app__info--title">
  <p>Humidity</p>
  </div>
    <div class = "app__info--data">
          <i class="fa-solid fa-droplet"></i>
          <p>${main.humidity}%</p>
        </div>
        </div>

        <div class="app__info--datas wind">
          <div class = "app__info--title">
  <p>Speed</p>
  </div>
    <div class = "app__info--data">
          <i class="fa-solid fa-wind"></i>
          <p>${speed}m/s</p>
        </div>
        </div>

        <div class="app__info--datas pressure">
          <div class = "app__info--title">
  <p>Pressure</p>
  </div>
    <div class = "app__info--data">
          <i class="fa-solid fa-gauge"></i>
          <p>${main.pressure}Pa</p>
        </div>
        </div>
        `;
  app__info.innerHTML = htmltag;
};

searchbtn.addEventListener("click", getWeatherData);
