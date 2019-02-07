function openNav() {
    //document.getElementById("menu-lateral").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("menu-lateral").classList.add("menu-aberto");

    /*if(window.innerWidth()>700){
        document.getElementById("menu-lateral").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else{
        document.getElementById("menu-lateral").style.width = window.innerWidth;
        //document.getElementById("main").style.marginLeft = "250px";
    }*/
}

function closeNav() {
    //document.getElementById("menu-lateral").style.width = "0";
    document.getElementById("menu-lateral").classList.remove("menu-aberto");
    document.getElementById("main").style.marginLeft= "0";
}
