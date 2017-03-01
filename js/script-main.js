$(function () { 

});  

	var donationBox = document.getElementById('donation-box'),
	donationButton = document.getElementById('donation-btn');
	donationButton.onclick = function() {
		var progressBar = $('.progress-bar'),
		progressBarCurrentVal = progressBar.attr('aria-valueNow'),
		inputValue = donationBox.value;
		// by 10 to convert to width percentage
		progressBarCurrentVal = (+inputValue) + +progressBarCurrentVal;
		var width = progressBarCurrentVal/10;
		progressBar.css('width', width+'%').attr('aria-valuenow', progressBarCurrentVal);
	}

//donationButton.onClick = calculateFundValue();
