function opentab(currenttab,currentcontent){
    let alltabs = document.getElementsByClassName("category-card");
    let allcontents = document.getElementsByClassName("content");
    var currentcontent = document.getElementById(currentcontent);

    for( let i=0; i< alltabs.length; i++){
        alltabs[i].classList.remove("active");
        allcontents[i].classList.remove('active');
    }
currenttab.classList.add('active');
currentcontent.classList.add('active');
}