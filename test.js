

//------ Recupération des data dans le fichier JSON ---//

let http = new XMLHttpRequest();
http.open('get', '/JSON/data.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      
      console.log("data : ",data);

      
   }

   // je filtre 1 élément avec la note à 5
   var dataPN = data.filter(function(triNote) {
    return ( (triNote.notation == 5));
    });
    console.log("valeur de dataPN : ",dataPN); 
    
    
}

const btn = `
    <div>
        <p> Test de notre Bouton
        </p>
        <input class="favorite styled" id="01" type="button" onclick="test()" value="Envoyer une info">
    </div>`

document.getElementById("essais").innerHTML = btn;

function test(){

}
