$(document).ready(function(){
//add chosen to the survey
$(".chosen-select").chosen({})

$('#submit-button').on('click', function(){
		
	
//create an object of the person taking the survey to be added to the friends object

	//add the name and image to the object
	var userData = {
		name: $('#survey-name').val().trim(),
		image: $('#survey-image').val().trim(),
		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val() ]
    	};

	/*//add the numbers in the response of the survey to the object
	$('.chosen-select').each(function(index, element){
		//return the elements value and set it to a number for comparison later
		userData[element.id] = Number($(element).val());
	});*/

	var currentURL = window.location.origin;

	$.post(currentURL + "/api/friends", userData, function(data){
		console.log("post works");
		console.log(data.name);
		
	});	

});


	
});