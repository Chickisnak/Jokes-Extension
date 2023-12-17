const btn = document.getElementById("btn");
const jokePara = document.getElementById("joke")
const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '66c4ece3d3msh04b76b37327b262p1ea90cjsn8453f1f72443',
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
  }
};

let timer;

btn.addEventListener('click', async () => {
  clearTimeout(timer);
  try {
    if (!btn.disabled) {
      btn.disabled = true
      const response = await fetch(url, options);
      const result = await response.json();
      jokePara.innerHTML = result[0].joke;
      timer = setTimeout(()=>{
        btn.disabled = false
      }, 1000)
    }
  } catch (error) {
    console.error(error);
  }
})



