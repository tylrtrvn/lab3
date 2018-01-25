'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		// $('.jumbotron h1').text("Javascript is connected");
		// When user clicks on button in jumbotron, this changes text of that button
		$("#testjs").text("One sec...");
		$(".jumbotron p").addClass("active");
		$("#testjs").toggleClass("active");

	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick); // Listens to clicks on project <a> elements in HTML file
}
function projectClick(e) {
	// Prevent the page from reloading
	e.preventDefault();

	// In an event handler, $(this) refers to
	// the object that triggered the event
	$(this).css("background-color", "#B8ABA5");


	// These lines of code will just append the description of the project underneath
	// each project and keep appending.
	// var containingProject = $(this).closest(".project");
	// containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

	// This will replace instead of append description.
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Here is the description of the project.</p></div>");
	}
	else {
		 //description.html("<p>You already clicked at " + (new Date()) + "</p>");
		$(containingProject).fadeToggle(".project-description");
	}


}