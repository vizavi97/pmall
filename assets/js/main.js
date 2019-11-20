// popular goods slider
var $carousel = $('#popularGoodsSlider').flickity({
  pageDots: false, 
  wrapAround: true, 
  prevNextButtons: false,
  contain: true,
  on: {
    select: function( index ) {
          $('.productCurrentActive').text(index+1);
      }
  }
});

$('.popular-goods .button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});

$('.popular-goods .button--next').on( 'click', function() {
  $carousel.flickity('next');
});



// product card page
var $carouselCard = $('#productCardSlider').flickity({
  prevNextButtons: false
});

$('#productCardSliderDocs .carousel-cell-card').on( 'click', function() {
  $('#productCardSliderDocs .carousel-cell-card').removeClass('active');
  
    $(this).addClass('active');
    var index = $(this).index();
  
    $carouselCard.flickity('select', index);
});

  



// link active

$(document).ready(function() {
  $("a").click(function() {
    var actRef = $(this).attr("href");
    if (actRef === "second.html") {
      $("a[href='second.html']").addClass("active");
    }
  });
});




// header-menu
   $(document).ready(function(){
	  var demo1 = $('.mobile-link').slideMenu({
	      submenuLinkAfter: ' >',
	      backLinkBefore: '< '
	  });
	});
	
  var cover = $('.nav-cover');
  var menu = $('.menu#show');
  var nav = $('.navigation#nav');
  var status = 'close';
  
  menu.click(function () {
    if (status == 'close') {
      $(this).children().addClass('open');
      cover.show();
      nav.addClass('active');
      status = 'open';
    } else {
      $(this).children().removeClass('open');
      cover.hide();
      nav.removeClass('active');
      status = 'close';
    }
  });
  
  cover.click(function () {
      menu.children().removeClass('open');
      cover.hide();
      nav.removeClass('active');
      status = 'close';
  });
  

  



function countSpinner(element, n){
    if (element.length == 0) return false;
    var value = parseInt(element.val());
    value = n ? ++value : --value;

    element.val(value > 0 ? value : 1);
    element.trigger('input');
}

$(function(){
  $(document).on('click', '.rating-stars a', function(e){
    e.preventDefault();
    
    var t = $(this),
        p = $(this).parent(),
        i = p.find('input'),
        a = p.find('a');
        
        
        p.addClass('selected');
        a.removeClass('active');
        t.addClass('active');
        i.val(t.index());
});
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var data = e.target.result;
            var file = $(input);
            file.parent().addClass('has-file');
            file.parent().css("background-image", 'url("'+data+'")');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// checkbox on ajax-filter-pc
$(document).on('click','.filter-button',function(){
  if ($('#filter-button').prop("checked")){
    $('.ajax-filter-pc').find('form').removeClass('block');
    $('.ajax-filter-pc').find('form').addClass('none')
  }
  else {

    $('.ajax-filter-pc').find('form').removeClass('none');
    $('.ajax-filter-pc').find('form').addClass('block');
  }

});

$(document).on('click','.mobile-filter-button',function(){
  $(document).find('.modal-filter-window').css("z-index","10000");
});


function calcPrice (e) {
  let price = $(e).val();
  let parent = $(e).parent().parent();
  let percent = $(parent).find('.percent').val();
  let calcValue = $(parent).find('.calc-value');
  let value = price - ( price * percent / 100 );
  calcValue.val(value);
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
};

$(document).on('click','.modal-filter-window-close-item',function(){
  $(document).find('.modal-filter-window').css("z-index","-10000");
});
