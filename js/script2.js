

/*bouton remonte page */
document.addEventListener('scroll', function() {
  var bouton = document.getElementById('boutonHaut');

  if (window.pageYOffset > 200) {
    bouton.classList.remove('hidden');
  } else {
    bouton.classList.add('hidden');
  }
});

/*Bouton menu*/

bouton = document.getElementById('open-menu');
bouton2 = document.getElementById('close-menu');
bouton.addEventListener('click', function() {
  var deroulement = document.getElementById('deroulement');
  if (deroulement.style.display === 'block') {
    deroulement.style.display = 'none';
    bouton2.classList.add('hidden');
    bouton.classList.remove('hidden');

  }
  else {
    deroulement.style.display = 'block';
    bouton2.classList.remove('hidden');
    bouton.classList.add('hidden');
  }

});

bouton2.addEventListener('click', function() {
  var deroulement = document.getElementById('deroulement');
  if (deroulement.style.display === 'block') {
    deroulement.style.display = 'none';
    bouton2.classList.add('hidden');
    bouton.classList.remove('hidden');

  }
  else {
    deroulement.style.display = 'block';
    bouton2.classList.remove('hidden');
    bouton.classList.add('hidden');
  }

});

/*changer style*/


function changerFeuilleStyle() {
  var lienFeuilleStyle = document.getElementById("style");
  var styleActuel = lienFeuilleStyle.getAttribute("href");

  if (styleActuel ===  '../css/style.css') {
    nouveauStyle = '../css/style2.css';
  } else {
    nouveauStyle = '../css/style.css';
  }

  lienFeuilleStyle.setAttribute("href", nouveauStyle);
  localStorage.setItem("styleChoisi", nouveauStyle);
}

window.onload = function() {
  var styleSauvegarde = localStorage.getItem("styleChoisi");
  var lienFeuilleStyle = document.getElementById("style");

  if (styleSauvegarde && lienFeuilleStyle) {
    lienFeuilleStyle.setAttribute("href", styleSauvegarde);
  }
};