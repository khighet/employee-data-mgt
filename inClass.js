var config = {
    apiKey: “AIzaSyCe-qPiyaRmh_Z2JAPBRt_fM7KvViGlVRY”,
    authDomain: “employee-data-mgt.firebaseapp.com”,
    databaseURL: “https://employee-data-mgt.firebaseio.com”,
    projectId: “employee-data-mgt”,
    storageBucket: “”,
    messagingSenderId: “295881416440"
 };
 firebase.initializeApp(config);

var submitButton = $("#tid");

submitButton.on("click", function(e){

	var newEmp = {
		name: $("#name-form").val().trim(),
		role: $("#name-form").val().trim(),
		startDate: $("#name-form").val().trim(),
		MonthlyRate: $("#name-form").val().trim()

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

}


