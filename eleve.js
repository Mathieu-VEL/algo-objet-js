class Eleve{
    constructor(n, p, c,){
        this.nom = n;
        this.prenom = p;
        this.classe = c;
        this.notes = {math:[], algorythme:[], javascript:[]};
    }
    bonjour(){
        alert("bonjour, je suis "+this.nom.firstname+this.nom.name+" et j'ai "+this.age+" ans");
    }
}