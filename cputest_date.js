window.onload = function () {
    console.log("STARTME---" + new Date().getTime())
    for (i = 0; i < 200000; i++) {
        Date.now()
    }
    console.log("STOPME---" + new Date().getTime())
}