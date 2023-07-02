// let searchText = document.getElementById("searchText");
// let searchBtn = document.getElementById("searchBtn").addEventListener("click", loadData); 


let getData = async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText.value}`); 
  return response.data;
};


let loadData = async () => {
  let data = await getData();
  console.log(data);
  let newRow = `<tr><th scope="row">Name</th><td>${data.name}</td></tr>
  <tr><th scope="row">Image</th><td><img src="${data.sprites.front_default}" alt="${data.name}"></td></tr>
  <tr><th scope="row">Ability</th><td>${data.abilities[0].ability.name}</td></tr>
  <tr><th scope="row">Base Exp</th><td>${data.base_experience}</td></tr>
  <tr><th scope="row">Base HP</th><td>${data.stats[0].base_stat}</td></tr>
  <tr><th scope="row">Attack</th><td>${data.stats[1].base_stat}</td></tr>
  <tr><th scope="row">Defense</th><td>${data.stats[2].base_stat}</td></tr>`; 
// used my pokemon project as a reference but had to do some googling to find proper syntax for js
  document.getElementById("pokeinfo").insertAdjacentHTML('afterbegin', newRow);

};

let searchText = document.getElementById("searchText");
let searchBtn = document.getElementById("searchBtn").addEventListener("click", loadData); 
// having this at the top instead of bottom threw me off for quite a bit