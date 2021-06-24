let button = document.querySelector('.button');

let inputValue = document.querySelector('.inputValue');

let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3dd6054a997e81b42676a55bfe7b496f')
  .then(response=> response.json())
  .then(data => {
      console.log(data);
      let nameValue = data['name'];
      let tempValue = data['main']['temp']-273;
      let descValue = data['weather'][0]['description'];
      name.innerHTML  = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
  })

.catch(err => alert("wrong city name!"))
})