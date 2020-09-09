function saisir_nom(){
    var nom=prompt ("Quel est votre nom ?");
    var conf=confirm("Vous vous appelez vraiment " + nom + "?");
    if(conf){
    alert ("Bonjour " + nom);
    }
}