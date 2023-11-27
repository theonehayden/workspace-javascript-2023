// Hotel registration --- Store in an object
var test = { // You can call things like test.room to get 459
    hotelname: "Marriot",
    room: 459,
    booked: 123,
    display: function(){ // Another no name function
        return this.booked;
    }
};

// Access the properties / Change the properties
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144; // This changes the value of booked under the test variable to 144
test.display();

// Start the Hotel Reservation
var GuestGroup =[];
function reservation() {
    // Get the values from the form, and put it in an object
   // Practice -- Complete the project
    var guest  = {
        name: $('#name').val(),
        numberofGuest: $('#numbs').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        roomType: $('#room').val()
    };
    GuestGroup.push(guest); // This pushes the guest attributes onto the guestGroup Array
    console.log(guest);
    alert("This is a test");
}
function displayList() {
    $("#guestlist").html("");
    $("#guestlist").append("<table>");
    for(var i in GuestGroup) {
        $("#guestlist").append("<tr><td>" + GuestGroup[i].name + "</td>");
        $("#guestlist").append("<td>" + GuestGroup[i].numberofGuest + "</td>");
        $("#guestlist").append("<td>" + GuestGroup[i].checkin + "</td>");
        $("#guestlist").append("<td>" + GuestGroup[i].checkout + "</td>");
        $("#guestlist").append("<td>" + GuestGroup[i].roomType + "</td></tr>");

    }
    $("#guestlist").append("</table>");
    alert("This is a test");

}




// Register the event hander
$('#submit').click(reservation);
$("#lists").click(displayList);

