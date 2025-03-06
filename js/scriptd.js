$(document).ready(function() {
	$('#btn-nextd').click(function(event) {

		var slide_sau = $('.activerd').next();
		console.log(slide_sau.length);
		if(slide_sau.length!=0){
			$('.activerd').addClass('bien-mat-ben-traid').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traid').removeClass('bien-mat-ben-traid').removeClass('activerd');
			});
			slide_sau.addClass('activerd').addClass('di-vao-ben-phaid').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaid').removeClass('di-vao-ben-phaid');
			});
		}else{
			$('.activerd').addClass('bien-mat-ben-traid').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-traid').removeClass('bien-mat-ben-traid').removeClass('activerd');
			});
			$('.slided:first-child').addClass('activerd').addClass('di-vao-ben-phaid').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phaid').removeClass('di-vao-ben-phaid');
			});
		}
	});
	$('#btn-prevd').click(function(event) {

		var slide_truoc = $('.activerd').prev();
		if(slide_truoc.length!=0){
			$('.activerd').addClass('bien-mat-ben-phaid').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaid').removeClass('bien-mat-ben-phaid').removeClass('activerd');
			});
			slide_truoc.addClass('activerd').addClass('di-vao-ben-traid').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traid').removeClass('di-vao-ben-traid');
			});
		}else{
			$('.activerd').addClass('bien-mat-ben-phaid').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phaid').removeClass('bien-mat-ben-phaid').removeClass('activerd');
			});
			$('.slided:last-child').addClass('activerd').addClass('di-vao-ben-traid').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-traid').removeClass('di-vao-ben-traid');
			});
		}
	});
});