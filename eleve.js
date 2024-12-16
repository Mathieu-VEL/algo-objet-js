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

}
