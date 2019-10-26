/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function showOpties(){
    var x = document.getElementById("formulier");
    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
    }

document.getElementById('filter').addEventListener('click', showOpties);

