var apiclient = (function() {

    return{
        getBluePrintsByAuthor: function (authorName){
            $.ajax({
                url: "http://localhost:8080/blueprints/"+authorName
            }).then(function(data) {
                var cont = 0;
                data.forEach(element => {
                    var table = document.getElementById("tableBluePrints");
                    let row =  table.insertRow();
                    let bluePrintName = row.insertCell();
                    let numberOfPoints = row.insertCell();
                    let button = row.insertCell();
                    bluePrintName.innerHTML = element.name;
                    numberOfPoints.innerHTML = element.points.length;
                    cont += element.points.length;
                    button.innerHTML = "<Button class=\"btn btn-success\">Open</Button>";
                });
                document.getElementById("totalPoints").innerHTML = "Total points: " + cont;
            });
        }
    }

})();


    
