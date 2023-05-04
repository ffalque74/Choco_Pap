document.body.onload=fonction() {
    //-------- fonction de recuperation du nombre d'article --//
    var nbArticles = document.getElementById("number");
    var nb = localStorage.getItem("nbArticle");
    nbArticles.innerHTML = nb;
    nbr=3;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1;i<nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('/images/im"+i+".jpg";
        container.appendChild(div);
    }
}