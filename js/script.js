$(document).ready(function() {
	$('#btn-next').click(function(event) {

		var slide_sau = $('.activer').next();
		console.log(slide_sau.length);
		if(slide_sau.length!=0){
			$('.activer').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('activer');
			});
			slide_sau.addClass('activer').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}else{
			$('.activer').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('activer');
			});
			$('.slide:first-child').addClass('activer').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}
	});
	$('#btn-prev').click(function(event) {

		var slide_truoc = $('.activer').prev();
		if(slide_truoc.length!=0){
			$('.activer').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('activer');
			});
			slide_truoc.addClass('activer').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}else{
			$('.activer').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('activer');
			});
			$('.slide:last-child').addClass('activer').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});
});