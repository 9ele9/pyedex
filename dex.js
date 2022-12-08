/* global fetch */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function stat(pokestat){
  let bar = " <div class=\"progress\">" + "<div class=\"progress-bar\" \"progress-bar-info\" role=\"progressbar\" aria-valuenow=\"" + (pokestat/2) + "\""
  + "aria-valuemin=\"0\" aria-valuemax=\"200\" style=\"width:" + (pokestat/2) + "%\">"
  + "<span class=\"sr-only\">" + (pokestat/2) + "% Complete</span></div></div>";
  let statbar = pokestat + bar;
  return statbar;
}

function randomize(){
  let value = getRandomInt(1,899).toString();
  return value;
}

function capitalize(name){
    let firstlet = name.charAt(0);
    let firstletcap = firstlet.toUpperCase();
    let restlet = name.slice(1);
    return firstletcap + restlet;
}

document.getElementById("get-mon").addEventListener("click", function(event) {
  event.preventDefault();
  
  let mon = document.getElementById("query").value;
  
  if (document.getElementById("query").value == ""){
    mon = randomize();
  }

  const url2 = "https://pokeapi.co/api/v2/pokemon/" + mon;
    fetch(url2)
    
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);
      document.getElementById("main").style.display = "initial";
      let image = json.sprites.front_default;
      let name = capitalize(json.species.name);
      let ability = capitalize(json.abilities[0].ability.name);
      let dexNum = json.id;
      let type = capitalize(json.types[0].type.name);
      if(json.types.length > 1){
        let type2 = capitalize(json.types[1].type.name);
        document.getElementById("type2").innerHTML=type2;
      }
      

      let stat1 = "<strong>HP:</strong> " + stat(json.stats[0].base_stat);
      let stat2 = "<strong>Attack:</strong> " + stat(json.stats[1].base_stat);
      let stat3 = "<strong>Defense:</strong> " + stat(json.stats[2].base_stat);
      let stat4 = "<strong>Special Attack:</strong> " + stat(json.stats[3].base_stat);
      let stat5 = "<strong>Special Defense:</strong> " + stat(json.stats[4].base_stat);
      let stat6 = "<strong>Speed:</strong> " + stat(json.stats[5].base_stat);
      document.getElementById("img2").src=image;
      document.getElementById("name").innerHTML=name;
      document.getElementById("stat1-2").innerHTML=stat1;
      document.getElementById("stat2-2").innerHTML=stat2;
      document.getElementById("stat3-2").innerHTML=stat3;
      document.getElementById("stat4-2").innerHTML=stat4;
      document.getElementById("stat5-2").innerHTML=stat5;
      document.getElementById("stat6-2").innerHTML=stat6;
      document.getElementById("ability").innerHTML=ability;
      document.getElementById("dex").innerHTML=dexNum;
      document.getElementById("type").innerHTML=type;
      
      /*do similar stuff here */
    });
    
});