class Eleve{
    constructor(n, p, c,){
        this.nom = n;
        this.prenom = p;
        this.classe = c;
        this.notes = {math:[], algorithme:[], javascript:[]};
    }

    
    bonjour(){
        alert("bonjour, je suis "+this.prenom+" "+this.nom+" en classe de "+this.classe+"");
    }
        // average(){
        // return this.notes.algorithme
        // }
}

// function average(tab) {
                
//                 let sum = 0;
//                 for (let i = 0; i < tab.length; i++) {
//                     sum = sum + tab[i];
//                 }
//                 sum = sum / tab.length;
//             }
//             average(groupeEleves);