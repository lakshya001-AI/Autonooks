let updateCarImage = () =>{
    var selectedcar = document.getElementById("header-select-car").value;
    var imagePath = selectedcar + "img.jpg";

    document.getElementById("selected-car").src = imagePath;
};

let updateImage = () =>{

    var value = document.getElementById("carsdropdown").value;
    
    var image = value + "img.jpg";
    document.getElementById("cars-img").src = image;
};

let getCarDetails = async () =>{

    var carName = document.getElementById("carsdropdown").value;

    if(carName == "grandi10"){
        document.getElementById("class").innerText = "subcompact car";
        document.getElementById("fuel-type").innerText = "Petrol";
        document.getElementById("make").innerText = "Hyundai";
        document.getElementById("model").innerText = "Grand i10";
    }else if(carName == "scorpio"){
        document.getElementById("class").innerText = "Mid-size SUV";
        document.getElementById("fuel-type").innerText = "Diesel";
        document.getElementById("make").innerText = "Mahindra";
        document.getElementById("model").innerText = "Scorpio";
    }else if(carName == "ertiga"){
        document.getElementById("class").innerText = "Compact MPV";
        document.getElementById("fuel-type").innerText = "Diesel";
        document.getElementById("make").innerText = "Suzuki";
        document.getElementById("model").innerText = "Ertiga";
    }else if(carName == "innova"){
        document.getElementById("class").innerText = "Mid-size MPV";
        document.getElementById("fuel-type").innerText = "Diesel";
        document.getElementById("make").innerText = "Toyota";
        document.getElementById("model").innerText = "Innova";
    }
    else{
        var apiKey = 'm7UWQ+FPntpDeAWZzLmVTA==nPo5IC4HAVEQAU0H';
        var url = 'https://api.api-ninjas.com/v1/cars?model=' + carName;
        
        var response = await fetch(url,{
		method: 'GET',
		headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'}});

        var data = await response.json();
        console.log(data[0]);
        console.log(data[0].class);
        console.log(data[0].fuel_type);
        console.log(data[0].make);
        console.log(data[0].model);

        document.getElementById("class").innerText = data[0].class;
        document.getElementById("fuel-type").innerText = data[0].fuel_type;
        document.getElementById("make").innerText = data[0].make;
        document.getElementById("model").innerText = data[0].model;

    }




    


};

let matchData = () =>{
    const carSelected = document.getElementById("header-select-car").value;
    const pickupDate = document.getElementById("pick-up").value;
    const selectedCityfrom = document.getElementById("selected-city-from").value;
    const selectedCityto = document.getElementById("selected-city-to").value;
    const customerName = document.getElementById("customer-name").value;
    const customerEmail = document.getElementById("customer-email").value;
    const customerPhone = document.getElementById("customer-phone").value;
    const customerAddress = document.getElementById("customer-address").value;

    if(carSelected && pickupDate && selectedCityfrom && selectedCityto && customerName && customerEmail && customerPhone && customerAddress){
        // Here, i am going to write the matching algorithm to match the customer details with the Driver details
    
    }

}










