// popular goods slider
var $carousel = $('#popularGoodsSlider').flickity({
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  contain: true,
  on: {
    select: function (index) {
      $('.productCurrentActive').text(index + 1);
    }
  }
});

$('.popular-goods .button--previous').on('click', function () {
  $carousel.flickity('previous');
});

$('.popular-goods .button--next').on('click', function () {
  $carousel.flickity('next');
});


// product card page
var $carouselCard = $('#productCardSlider').flickity({
  prevNextButtons: false
});

$('#productCardSliderDocs .carousel-cell-card').on('click', function () {
  $('#productCardSliderDocs .carousel-cell-card').removeClass('active');

  $(this).addClass('active');
  var index = $(this).index();

  $carouselCard.flickity('select', index);
});


// link active

$(document).ready(function () {
  $("a").click(function () {
    var actRef = $(this).attr("href");
    if (actRef === "second.html") {
      $("a[href='second.html']").addClass("active");
    }
  });
});


// header-menu
$(document).ready(function () {
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


function countSpinner(element, n) {
  if (element.length == 0) return false;
  var value = parseInt(element.val());
  value = n ? ++value : --value;

  element.val(value > 0 ? value : 1);
  element.trigger('input');
}

$(function () {
  $(document).on('click', '.rating-stars a', function (e) {
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
      file.parent().css("background-image", 'url("' + data + '")');
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// checkbox on ajax-filter-pc
$(document).on('click', '.filter-button', function () {
  if ($('#filter-button').prop("checked")) {
    $('.ajax-filter-pc').find('form').removeClass('block');
    $('.ajax-filter-pc').find('form').addClass('none')
  } else {

    $('.ajax-filter-pc').find('form').removeClass('none');
    $('.ajax-filter-pc').find('form').addClass('block');
  }

});

$(document).on('click', '.mobile-filter-button', function () {
  $(document).find('.modal-filter-window').css("z-index", "10000");
  $(document).find('.modal-filter-window-close').css("display","flex");
  $(document).find('#ajaxFilterForm').removeClass('none');
  $('body').css("overflow-y","hidden")
});
$(document).on('click', '.modal-filter-window-close-item', function () {
  $(document).find('.modal-filter-window').css("z-index", "-10000000");
  $(document).find('.modal-filter-window-close').css("display","none");
  $(document).find('#ajaxFilterForm').addClass('none');
  $('body').css("overflow-y","scroll")
});


function calcPrice(e) {
  let price = $(e).val();
  let parent = $(e).parent().parent();
  let percent = $(parent).find('.percent').val();
  let calcValue = $(parent).find('.calc-value');
  let value = price - (price * percent / 100);
  calcValue.val(value);
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
};
function isNumberPhoneKey(key)  {
  return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
};

$(document).on('click', '.add-product', function () {
  var parEnt = $('.field-group-add:first').html();
  var index = Number($('.field-group-add:last').attr('rel'));
  index++;
  $('.field-group-add:last').after('<div class="field-group-add row" rel="' + index + '">' + parEnt.replace(/[0]/g, index) + '</div>');
});

$(document).on('click', '.delete-add-product', function () {
  let r = $(this).parents('.field-group-add').attr('rel');
  if (r != 0) {
    $(this).parents('.field-group-add').remove();
  }
});

$(document).on('click', '.sales-button', function () {
  let parent = $(this).parent().find('.closing-div');
  $(parent).css('display', 'flex');
  this.remove();
  console.log(parent);
});

$(document).on('click', '.password-changer', function () {
  if ($('#password-checkbox').prop("checked")) {
    $('#pass').attr('type', 'password');
    $('.eye-active').css('display', 'none');
    $('.eye').css('display', 'flex');
  } else {
    $('#pass').attr('type', 'text');
    $('.eye').css('display', 'none');
    $('.eye-active').css('display', 'flex');
  }
});

$(document).ready(function () {
  var index = Number($('.update-photo:last').attr('rel'));
  var first = $('.update-photo:first');
  var parEnt = first.html();
  var max = 5;
  $(document).on('click', '.add-images', function () {
    if (index < max) {
      index++;
      $('.update-photo:last').after('<div class="update-photo col-4" rel="' + index + '">' + parEnt + '');
    }
  });
  $(document).on('click', '.delete-images', function () {
    index--;
    $(this).parents('.update-photo').remove();
  });
});

$(document).on('click','.change-categories',function(){
    $(document).find('.categories-properties').removeClass('d-none');
    $(this).parents('.categories-products-container').remove();
});