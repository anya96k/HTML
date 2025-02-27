$(document).ready(function() {
    function showMessage(message) {
        $("#messageBox").text(message).slideDown().delay(2000).slideUp();
    }

    $("#clickButton").click(function() {
        alert("You clicked the 'Click Me' button.");
        showMessage("You clicked the button!");
    });

    $("#dblclickButton").dblclick(function() {
        alert("You double-clicked the 'Double Click Me' button.");
        showMessage("You double-clicked!");
    });

    $("#mouseoverButton").mouseover(function() {
        $(this).css("background-color", "lightgreen");
        alert("You moved the mouse over 'Mouse Over Me' button.");
        showMessage("Mouse Over Event Triggered!");
    }).mouseout(function() {
        $(this).css("background-color", "");
    });

    // Capturing keypress anywhere on the document
    $(document).keypress(function(event) {
        alert("You pressed the '" + event.key + "' key.");
        showMessage("Key Pressed: " + event.key);
    });

    // Slide up and slide down buttons
    $("#slideUpButton").click(function() {
        $("#heading").slideUp();
    });

    $("#slideDownButton").click(function() {
        $("#heading").slideDown();
    });

});
