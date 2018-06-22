
window.onload = function () { 
    setTimeout(function () {
        console.log("STARTME---" + new Date().getTime())
        array100000.sort();
        console.log("STOPME---" + new Date().getTime())
    }, 15000);

}