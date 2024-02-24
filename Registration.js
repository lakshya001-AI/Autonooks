document.getElementById("registration").style.display = "none";

function openRegistrationForm(){
    document.getElementById("registration").style.display = "flex";
    document.getElementById("confirm").style.display = "none";
}

// task 
// 1] we should have database for both the customer and driver 
// 2] information of the customer and driver
// 3] matching algorithm: on the button click 
//        1] Take the customer data store in the variable 
//        2] we have to traverse the driver data and find the customer data inside the drivers data
//        3] if we match the customer data with the drivers data we are going to end the traversing
//        4] we have send a push notification to the driver with the customer detail 
//        5] we also have to send a push notification to the customer that the booking has been matched the driver is going contact you shortly 




