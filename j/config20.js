$(function() { 
	$('.childstabs a').click(function (e) {
	  	e.preventDefault();
		e.stopImmediatePropagation();
	  	$(this).tab('show');
	});	
});

