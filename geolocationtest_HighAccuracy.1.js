window.onload = function () {
    var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };
    i = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
        setTimeout(function () {
            console.log("STARTME---" + new Date().getTime())
            for (j = 0; j < 20000; j++) {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }
        }, 15000);

    }

    function success() {
        i++;
        if (i == 20000) {
            console.log("STOPME---" + new Date().getTime())
        }
    }

    function error(err) {
        i++;
    }
}