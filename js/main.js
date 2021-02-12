

$(document).ready(function () {
    

    let nav = document.querySelector("nav")

    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            nav.classList.add("nav-scroll");
        }
         else {
            nav.classList.remove("nav-scroll");
        }
    });

     
    $("#NavOpen").click(function(e){
        $(".navigation").addClass("show");
        e.stopPropagation()
    })
    $("#NavClose").click(function(e){
        $(".navigation").removeClass("show");
        e.stopPropagation()
    })
    $('html').click(function(){
        if($("#navigation").hasClass("show")){
         $("#navigation").removeClass("show");
        }
    })
   
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

})

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
};