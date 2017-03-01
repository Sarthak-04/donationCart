$(function () { 
	$('progress').tooltip('show'); 
});  
/*
$( document ).ready(function() {
    
});*/
	var donationBox = document.getElementById('donation-box'),
	donationButton = document.getElementById('donation-btn');
	donationButton.onclick = function() {
		var progressBar = $('.progress-bar'),
		progressBarCurrentVal = progressBar.attr('aria-valueNow'),
		inputValue = donationBox.value;
		// by 10 to convert to width percentage
		progressBarCurrentVal = (+inputValue) + +progressBarCurrentVal;
		var width = progressBarCurrentVal/10,
		amountRemaining = 1000 - progressBarCurrentVal;
		progressBar.css('width', width+'%').attr('aria-valuenow', progressBarCurrentVal);
		$('.progress').attr('title',"$" + amountRemaining + " still needed for this project");
	}

//donationButton.onClick = calculateFundValue();
