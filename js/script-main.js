$(function () { 
	$('progress').tooltip();
});  
	
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
		//$('.progress').attr('title',"$" + amountRemaining + " still needed for this project");
		$('#donation-left').text("$" + amountRemaining + " still needed for this project")
	}

/*	window.fbAsyncInit = function() {
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
 */