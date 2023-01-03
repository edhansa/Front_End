function afficherContenuJSON() {
  // Récupération de l'élément div
  var el = document.getElementById("maDiv");

  // Création d'une requête HTTP
  var xhr = new XMLHttpRequest();

  // Ouverture de la requête
  xhr.open("GET", "data.json", true);

  // Envoi de la requête
  xhr.send();

  // Gestion de la réponse
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Si la réponse est réussie, on affiche le contenu du fichier JSON dans la div
      var json = JSON.parse(xhr.responseText);
      alert(json);
      for(var i = 1; i < json.length; i++) {
        console.log(json[i].Column2);
        //el.innerHTML = el.innerHTML + json[i].Column2;
      }
      
      //el.innerHTML = xhr.responseText;
    } else {
      // Si la réponse est un échec, on affiche un message d'erreur
      el.innerHTML = "Erreur lors de la récupération du fichier JSON";
    }
  }
}



