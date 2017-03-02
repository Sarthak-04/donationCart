$(function () { 
	$('progress').tooltip();
});  
	//test
	var donationBox = document.getElementById('donation-box'),
	donationButton = document.getElementById('donation-btn');
	donationButton.onclick = function() {
		$('.error-message').css('display','none');
		var progressBar = $('.progress-bar'),
		progressBarCurrentVal = progressBar.attr('aria-valueNow'),
		inputValue = donationBox.value;
		// only calculate if input vallue is a positive integer
		if(inputValue.match(/^[0-9]*[1-9][0-9]*$/)) {
			// by 10 to convert to width percentage
			progressBarCurrentVal = (+inputValue) + +progressBarCurrentVal;
			var width = progressBarCurrentVal/10,
			amountRemaining = 1000 - progressBarCurrentVal;
			// clear input on submit only when value is correct;
			donationBox.value="";
			if (amountRemaining <= 0) {
				progressBarCurrentVal = 1000;
				$('#donation-left').text("Thank you! Target met.");
				progressBar.css('width', 100+'%').attr('aria-valuenow', 1000);
				progressBar.css('background-color', '#5cb85c');
			} 
			else {
				progressBar.css('width', width+'%').attr('aria-valuenow', progressBarCurrentVal);
				$('#donation-left').text("$" + amountRemaining + " still needed for this project");
			}
		}
		else {
			$('.error-message').css('display','block');
		}	
	}

	window.fbAsyncInit = function() {
    FB.init({
      appId      : '421240411555274',
      xfbml      : true,
      version    : 'v2.6'
    });
    //FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s);
     js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

	document.getElementById('btn-two').onclick = function() {
	FB.ui({
	method: 'share',
	display: 'popup',
	href: 'https://developers.facebook.com/docs/',
	quote: 'Yay, I donated!'
	}, function(response){})};
 