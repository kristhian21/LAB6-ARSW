var app = (function(){

    var newAuthorName;

    // Get elements

    var _module = apiclient;
    var table = document.getElementById("tableBluePrints");
    var button = document.getElementById("authorNameButton");

    // Click button listener

    button.addEventListener("click", function(){
        // Get the value in de author name input
        newAuthorName = document.getElementById("inputName").value;
        // Clear the table
        clearData();
        // Update de author information
        updateName(newAuthorName);
        _module.getBluePrintsByAuthor(newAuthorName);
    });

    function updateName(newNameValue){
        if (newNameValue == "") {
            newNameValue = "All Blue prints";
        }
        document.getElementById("authorName").innerHTML = newNameValue;
    }

    function clearData(){
        var size = table.rows.length;
        for(var x=size-1; x > 0; x--){
            table.deleteRow(x);
        }
    }

})();
