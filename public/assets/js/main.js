//Main JS File
const Main = (function() {
    'use strict';

    /* Private */

    //Used to log
    const log = (msg) => {
        console.log(msg);
    }

    const alertMe = (msg) => {
        alert(msg);
    }

    /* Public */

    const init = () => {
        //Write all inits here
        log("Init");
    }

    /* Exporting public method */

    return {
        init: init
    };

}());
