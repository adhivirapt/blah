window.onload = function () {
    console.log("STARTME---" + new Date().getTime())
    for (var i = 0; i < 75000; i++) {
        localStorage.setItem(i, "");
        // console.log(localStorage.getItem(i));
    }
    console.log("STOPME---" + new Date().getTime())


}