//bouton central

let monBouton = document.querySelector('button');
let monTexte = document.querySelector('section');
	
	monTexte.style.display = 'none';

monBouton.onclick = function() 
{
	monTexte.style.display = 'block';
	monBouton.style.display = 'none';
}

//fonction recherche

let bouton = document.querySelector('button#recherchegoogle')

bouton.onclick = function() 
{
var search = document.getElementById("recherche1").value;
    document.location.href="https://www.google.fr/#q="+search;
   
}


//pop ups

setTimeout(function ()
{
    alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');},10000)

