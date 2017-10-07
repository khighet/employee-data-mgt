
var config = {
    apiKey: "AIzaSyCe-qPiyaRmh_Z2JAPBRt_fM7KvViGlVRY",
    authDomain: "employee-data-mgt.firebaseapp.com",
    databaseURL: "https://employee-data-mgt.firebaseio.com",
    projectId: "employee-data-mgt",
    storageBucket: "employee-data-mgt.appspot.com",
    messagingSenderId: "295881416440"
  };

 firebase.initializeApp(config);
 
var database = firebase.database();

var submitButton = $("#submitEmp");

$("#submitEmp").on("click", function(event){

	

	var newEmp = {
		name: $("#name").val().trim(),
		role: $("#role").val().trim(),
		startDate: $("#date").val().trim(),
		monthlyRate: $("#rate").val().trim()

	}

	database.ref().push(newEmp);

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	// theTable = $("#myTable");
	// theRow = $("<tr>");

	// var vals = [];

	// vals[0] = $("#name-form").val().trim();
	// vals[1] = $("#name-form").val().trim();
	// vals[2] = $("#name-form").val().trim();
	// vals[3] = $("#name-form").val().trim();

	// for(var i=0;i<6;i++){
	// 	theRow.append(($("<td>").html(vals[i])));
	// }

	// theTable.append(theRow);

});


