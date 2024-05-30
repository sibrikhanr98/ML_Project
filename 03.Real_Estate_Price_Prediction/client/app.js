function getBathValue(){
    let uiBathrooms = document.getElementsByName("uiBathrooms");
    for(let i in uiBathrooms){
        if(uiBathrooms[i].checked){
            return parseInt(i)+1;
        }
    }
    return -1;
}

function getBHKValue(){
    let uiBHK = document.getElementsByName("uiBHK");
    for(let i in uiBHK){
        if(uiBHK[i].checked){
            return parseInt(i)+1;
        }
    }
    return -1;
}
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    // Get input values
    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    // Construct the URL for the Flask endpoint
    var url = "http://127.0.0.1:5000/predict_home_price";

    // Send a POST request to the Flask server
    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    }, function(data, status) {
        // Handle the response from the server
        //console.log("Response status:", status);
        //console.log("Estimated price:", data.estimated_price);

        // Update the UI with the estimated price
        estPrice.innerHTML = "<h2>" + data.estimated_price + " Lakh</h2>";
    })
    
}


function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names";
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
  }
  
window.onload = onPageLoad;