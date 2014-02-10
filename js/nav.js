// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		  this.setAttribute('data-state', 'inactive');
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
	    this.setAttribute('data-state', 'active');
		}
	});
	
	
	
	
	$('.rolldown-list li').each(function () {
  var delay = ($(this).index()/4) + 's';
  $(this).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
  });
});


// A button to reload the animation

$('#btnReload').click(function () {
  $('#myList').removeClass('rolldown-list');
  setTimeout(function () {
    $('#myList').addClass('rolldown-list');
  }, 1)
});