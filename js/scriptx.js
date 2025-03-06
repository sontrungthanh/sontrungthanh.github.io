$(document).ready(function() {
	$('#btn-nextx').click(function(event) {

		var slide_sau = $('.activerx').next();
		console.log(slide_sau.length);
		if(slide_sau.length!=0){
			$('.activerx').addClass('bien-mat-ben-traix').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traix').removeClass('bien-mat-ben-traix').removeClass('activerx');
			});
			slide_sau.addClass('activerx').addClass('di-vao-ben-phaix').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaix').removeClass('di-vao-ben-phaix');
			});
		}else{
			$('.activerx').addClass('bien-mat-ben-traix').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traix').removeClass('bien-mat-ben-traix').removeClass('activerx');
			});
			$('.slidex:first-child').addClass('activerx').addClass('di-vao-ben-phaix').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaix').removeClass('di-vao-ben-phaix');
			});
		}
	});
	$('#btn-prevx').click(function(event) {

		var slide_truoc = $('.activerx').prev();
		if(slide_truoc.length!=0){
			$('.activerx').addClass('bien-mat-ben-phaix').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaix').removeClass('bien-mat-ben-phaix').removeClass('activerx');
			});
			slide_truoc.addClass('activerx').addClass('di-vao-ben-traix').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traix').removeClass('di-vao-ben-traix');
			});
		}else{
			$('.activerx').addClass('bien-mat-ben-phaix').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaix').removeClass('bien-mat-ben-phaix').removeClass('activerx');
			});
			$('.slidex:last-child').addClass('activerx').addClass('di-vao-ben-traix').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traix').removeClass('di-vao-ben-traix');
			});
		}
	});
});