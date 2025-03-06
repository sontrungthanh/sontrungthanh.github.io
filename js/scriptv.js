$(document).ready(function() {
	$('#btn-nextv').click(function(event) {

		var slide_sau = $('.activerv').next();
		console.log(slide_sau.length);
		if(slide_sau.length!=0){
			$('.activerv').addClass('bien-mat-ben-traiv').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traiv').removeClass('bien-mat-ben-traiv').removeClass('activerv');
			});
			slide_sau.addClass('activerv').addClass('di-vao-ben-phaiv').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaiv').removeClass('di-vao-ben-phaiv');
			});
		}else{
			$('.activerv').addClass('bien-mat-ben-traiv').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traiv').removeClass('bien-mat-ben-traiv').removeClass('activerv');
			});
			$('.slidev:first-child').addClass('activerv').addClass('di-vao-ben-phaiv').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaiv').removeClass('di-vao-ben-phaiv');
			});
		}
	});
	$('#btn-prevv').click(function(event) {

		var slide_truoc = $('.activerv').prev();
		if(slide_truoc.length!=0){
			$('.activerv').addClass('bien-mat-ben-phaiv').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaiv').removeClass('bien-mat-ben-phaiv').removeClass('activerv');
			});
			slide_truoc.addClass('activerv').addClass('di-vao-ben-traiv').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traiv').removeClass('di-vao-ben-traiv');
			});
		}else{
			$('.activerv').addClass('bien-mat-ben-phaiv').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaiv').removeClass('bien-mat-ben-phaiv').removeClass('activerv');
			});
			$('.slidev:last-child').addClass('activerv').addClass('di-vao-ben-traiv').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traiv').removeClass('di-vao-ben-traiv');
			});
		}
	});
});