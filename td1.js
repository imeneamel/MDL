// TP1 - Méthode de Développement Logiciel
// On crée une fonction qui trouve le nombre d'occurence

/**
 * 
 * @param {string[]} tab list of xx 
 * @param {*} motcle 
 * @returns 
 */
function calculOccurence(tab, motcle)
{
// on crée un tableau de sortie vide
	let tab2 = [];
	// on utilise forEach pour chaque itération du tableau en entrée
	tab.forEach((x)=> {
	// On vérifie si il y a déjà un objet qui contient la valeur cherchée dans le tableau de sortie
	
		if(tab2.some((val)=>{ return val[motcle] == x[motcle] ;})
		){
			
			// Si oui, on incrémente l'occurence de 1
			tab2.forEach((k)=>{
				if(k[motcle] === x[motcle])
				{
					k["occurrence"]++ ;
				}
			})
			
		}//test
		else
		// Sinon, on créé un nouvel objet dans le tableau et initialise l’objet avec le nom de la clé fournie
		{
		// et on initialise l'occurrence à 1
			let a = {};
			a[motcle] = x[motcle];
			a["occurrence"] = 1 ;
			tab2.push(a);
		}
	})
	// on retourne le tableau de sortie avec noms des objets et occurences
	return tab2
}

// = = = Lecture du fichier = = =

// on définie fs pour la lecture du fichier json
const fs = require("fs");

// on vient lire le fichier users.json
let rawdata = fs.readFileSync("users.json");

// on manipule le fichier via cet objet nommé tab
let tab = JSON.parse(rawdata);

// = = = Argument à saisir = = = 
//var arguments = process.argv; // on va ajouter l'argument à prendre en compte lors de la compilation

// soit country, soit company (au choix) à écrire après : node nom.js argument
// on vient définir la clé à prendre en compte comme l'argument saisie lors de la compilation


//var readlineSync = require('readline-sync'),
//choix = ['Pays','Entreprises'],
console.log('Que souhaitez-vous afficher ?');
console.log('1 - Pays');
console.log('2 -' );
index = Number(readlineSync.question(""))
//keyInSelect(choix, 'Que souhaitez-vous afficher ?');
console.log();
console.log('Ok, voici l affichage des ' + choix[index] + ' et leur occurence !');

if (index==1){
	motcle = "country";
}
if (index==2) {
	motcle = "company";
}
// = = = Tri décroissant = = = 

// on vient stocker le résultat de la fonction dans une variable result
//var result = (calculOccurence(tab, motcle));

// on vient effectuer un tri inverse (b - a pour un tri décroissant // a - b pour un tri croissant)
result.sort(function(a,b) {return b.occurrence - a.occurrence}); // on précise qu'on compare des occurences

// on vient retourner le résultat trié dans l'ordre décroissant
console.log(result);