// JavaScript Document
$(document).ready(function () {
			$('.date-picker').datepicker({format: 'yyyy-mm-dd' });

			var offsetpos = 100;
			
			$(window).scroll(function(e){				
				var cp = $(document).scrollTop();				
				if( cp >=  offsetpos ){ $("header").addClass("dark",1000,"easeOutBounce"); }
				else { $("header").removeClass("dark");  }
								
				});	
				
			  $('a[href*=#]:not([href=#])').click(function() {				  
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 1000);
					return false;
				  }
				}
			  });
			  
			  
			  $('.small-tabb').click(function(){
				  	$('.backHide').show();
				  	$('#'+$(this).data('popname')).addClass('display-pop');
				  });
			  
			  $('.backHide').click(function(e) {
                $('.display-pop').removeClass('display-pop');
				$(this).hide();
            });	





// validate careerForm form on keyup and submit
		$("#careerForm").validate({
			rules: 
			{
				firstname: "required",
				lastname: "required",
				email: 
				{
					required: true,
					email: true
				},
				mobile: {
					required: true,
					number: true,
					minlength: 10
				},
				qualification: "required",
				resume: "required"

			},
			messages: 
			{
				firstname: "Please enter First Name",
				lastname: "Please enter Last Name",
				email: {
					required: "Please enter a email address",
					email: "Please enter a valid email address"
				},
				mobile: {
					required: "Please enter mobile no.",
					number: "Please provide only numbers",
					minlength: "Your mobile must be at least 10 digit long",
				},
				qualification: "Please enter your qualification",
				resume: "Please select a resume"
			}
		});
		
// validate consultForm form on keyup and submit

			$("#consultForm").validate({
			errorPlacement: function(error, element) {
							if (element.attr("name") == "category" )
								error.insertAfter($("#experience"));
							else if (element.attr("name") == "title" )
								error.insertAfter($("#lastname"));
							else if (element.attr("name") == "gender" )
								error.insertAfter($("#dob"));
							else if (element.attr("name") == "qualification" )
								error.insertAfter($("#specification"));
							else
								error.insertAfter(element);
					},
			rules: 
			{
				category:"required",
				title:"required",
				gender:"required",
				email: 
				{
					email: true,
					remote:  {
							url: "/modules/check-emailconsult.php",
						type: "get"
							}
				},
				mobile: {
					number: true,
					minlength: 10
				},
				qualification: "required"
			},
			messages: 
			{
				category:"Please choose a Job Category",
				title:"Please choose a Title",
				gender:"Please choose your Gender",
				email: {
					email: "Please enter a valid email address",
					remote:"Email id is already in use"
				},
				mobile: {
					number: "Please provide only numbers",
					minlength: "Your mobile must be at least 10 digit long",
				},
				qualification: "Please enter your qualification"
			}
		});
		
		$("#internForm").validate({
			errorPlacement: function(error, element) {
							if (element.attr("name") == "title" )
								error.insertAfter($("#lastname"));
							else if (element.attr("name") == "gender" )
								error.insertAfter($("#dob"));
							else if (element.attr("name") == "degree" )
								error.insertAfter($("#specification"));
							else if (element.attr("name") == "studyyear" )
								error.insertAfter($("#percentage"));
							else
								error.insertAfter(element);
					},
			rules: 
			{
				internarea:"required",
				title:"required",
				gender:"required",
				email: 
				{
					email: true,
					remote:  {
							url: "/modules/check-emailintern.php",
							type: "get"
							}
				},
				mobile: {
					required: true,
					number: true,
					minlength: 10
				},
				institute:"required",
				specification: "required",
				percentage:{
					number:true
				},
				degree:"required",
				studyyear:"required"
			},
			messages: 
			{
				internarea:"Please choose an area for Internship",
				title:"Please choose a Title",
				gender:"Please choose your Gender",
				email: {
					email: "Please enter a valid email address",
					remote:"Email id is already in use"
				},
				mobile: {
					number: "Please provide only numbers",
					minlength: "Your mobile must be at least 10 digit long",
				},
				institute:"Please enter your Institute name",
				specification: "Please enter your Specification",
				percentage:{
					number:"Please enter in numeric form"
				},
				degree:"Please choose your current degree",
				studyyear:"Please enter your current year of study"
			}
		});
	
		$('#resume').change(function () {
		
		var iSize1 = ($("#resume")[0].files[0].size);
		var val1 = $(this).val().toLowerCase();
		var regex1 = new RegExp("(.*?)\.(doc|docx|pdf)$");
		 
		if(!(regex1.test(val1))) {
		$(this).val('');
			alert('Please Select Resume only doc, docx, or pdf');
		}
		else if(iSize1>1024*1024)
		{
		$(this).val('');
			alert("Resume size should be below then 1MB");
		}
	 });

			
					

	//get hash code at next page
 // var hashcode = window.location.hash;
  //$('html,body').animate({scrollTop: $('div'+hashcode+'s').offset().top},2000);
//alert(hashcode);
  //<!-- move page to any specific position of next page(let that is div with id "hashcode")-->
  //$('html,body').animate({scrollTop: $('div'+hashcode).offset().top},1000);
  //$('html,body').scrollTop($(hascode).offset().top);



						//######################## Back To Top ########################
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 1500,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	//resume upload file name display
		// Span
			var span = document.getElementsByClassName('upload-path');
		// Button
			var uploader = document.getElementsByName('upload');
		// On change
			for( item in uploader ) {
				// Detect changes
					uploader[item].onchange = function() {
				// Echo filename in span
					span[0].innerHTML = "File Selected - "+this.files[0].name;
					}
			}
			
	//popup display and hide
	
	$('#overlay-back').fadeIn(500,function(){
            $('#popup').show();
			$("body").css("overflow", "hidden");
         });

         $(".close-image").on('click', function() {
            $('#popup').hide();
            $('#overlay-back').fadeOut(500);
			$("body").css("overflow", "auto");
         });

});