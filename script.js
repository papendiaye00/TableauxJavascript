// Creation de tableau de nombre et utilisation de la methode  .map() pour doubler les valeur du Tableau
let numbers = [12, 15, 30, 10, 17, 27, 34, 19, 39, 18];
let dbnumber = numbers.map(number =>
                 number * 2);
                console.log(dbnumber);


//Création de chaine de caractère  et filtrage du tableau pour renvoyer un nouveau tableau avec le smots dont  leur longeur est superieur à 3 caratctères avec la methode .filter()
 let stringtab = ['Bagarre', 'Homme', 'Gaz', 'Suis', 'Cité', 'Larg', 'Il', 'Machine', 'Long', 'Femme'];
 let FiltrageMots = stringtab.filter(stringtab => 
                stringtab.length > 3);
                console.log(FiltrageMots); 

//  Résumé de tous les nombres dans un tableau en utilisant .reduce()
 numbers = [12, 15, 30, 10, 17, 27, 34, 19, 39, 18];
let somme = numbers.reduce((N, number) => 
                N + number, 0);
                console.log(somme); 

// Tri de chaînes en utilisant .sort()
 stringtab = ['Bagarre', 'Homme', 'Gaz', 'Suis', 'Cité', 'Larg', 'Il', 'Machine', 'Long', 'Femme'];
                stringtab.sort();
                console.log(stringtab); 

//  Imprimer chaque élément d'un tableau en utilisant .forEach()
 numbers = [12, 15, 30, 10, 17, 27, 34, 19, 39, 18];
                numbers.forEach(number =>
                 console.log(number));
