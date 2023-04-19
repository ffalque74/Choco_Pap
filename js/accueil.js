document.body.onload=fonction() {
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