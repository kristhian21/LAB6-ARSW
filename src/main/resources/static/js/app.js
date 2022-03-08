function getBlueprintsByAuthor(){
    // Tomar el valor dentro del input de nombre de autor
    var newName = document.getElementById("inputName").value;
    // Limpiar los datos de la tabla
    clearData();
    // Actualizar nombre del autor
    updateName(newName);
    // Obtener datos de los planos
    getData(newName);
}


function updateName(newNameValue){
    if (newNameValue == "") {
        newNameValue = "All Blue prints";
    }
    document.getElementById("authorName").innerHTML = newNameValue;
}


function getData(authorName){
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


function clearData(){
    var table = document.getElementById("tableBluePrints");
    var size = table.rows.length;
    for(var x=size-1; x > 0; x--){
        table.deleteRow(x);
    }
}

    
