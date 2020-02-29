$(function() {
    
    // cart page remove cart position
    $(document).on("click", ".order_item button.del", function(event, contex) {
        var data = {
            'cart': [$(this).data('id')],
            'type': 'position',
        };
        
        $.request('onRemove', {
            'loading': $.oc.stripeLoadIndicator,
            'data': data,
            'update': {
                'order/cart-items': '#order-cartItems',
                'order/cart-content': '#cart-content'
            }
        });    
    });
    
    // Product page, add to cart
    $(document).on('click', '.order_block .order_line a.btn', function(event, context) {
        var data = $(this).closest('.order_block').find('.offer-item-id.active').data('data');
        if (!data) {
	    	/*toastr.warning("Выберите параметры");*/ //*swal("Выберите параметры","Пожалуйста","warning");*/
	    	$('#alertInfo').removeClass('d-none').html('Выберите параметры');
	        $(document).ready(function() {
	        	setTimeout(function() {
	        		$('#alertInfo').addClass('d-none');
	        	}, 3000);
	        });
        	return;
        }
        
        $('#alertSuccess').removeClass('d-none').html('Товар добавлен в корзину!');
        $(document).ready(function() {
        	setTimeout(function() {
        		$('#alertSuccess').addClass('d-none');
        	}, 3000);
        });
        
        //Send ajax request and update cart items
        $.request('Cart::onAdd', {
            'data': data,
            'loading': $.oc.stripeLoadIndicator,
            'update': {'cart/block-header-cart': '#block-header-cart'},
            'flash': 1,
        });
    });
    
    
    // Product item, add to cart
    $(document).on('click', '.button-basket button.btn', function(event, context) {
        var data = $(this).closest('.button-basket').find('.card-update').data('data');
        
        //Send ajax request and update cart items
        $.request('Cart::onUpdate', {
            'data': data,
            'loading': $.oc.stripeLoadIndicator,
            'update': {'cart/section-cart': '#section-cart'}
        });
    });
    
    
    // Product item, add to cart
    $(document).on('click', '.basket-info span.btn', function(event, context) {
        var data = $(this).closest('.basket-info').find('.offer-item-id.active').data('data');
        
		//Send ajax request and update cart items
        $.request('Cart::onAdd', {
            'data': data,
            'loading': $.oc.stripeLoadIndicator,
            'update': {'cart/section-cart': '#section-cart'},
            'flash': 1,
        });	
    });
    
    
    
    
    // filter & reset
    $(".js-range-slider").ionRangeSlider();
    $("p.reset").on("click", function() {
        $(this).closest('form').trigger("reset");
        $(".js-range-slider").data("ionRangeSlider").reset();
        
        var url = location.origin + location.pathname;
        history.pushState(null, null, url);
          
        $(this).request('ProductList::onAjaxRequest', {
            data: {},
            update: {
                'products/ajax-list': '#products-ajaxList',
                'products/infinity-loader': '#infinity-loader',
            },
        });
    });
    
    
    $("#ajaxFilterForm").on('submit', function(e, context) {
        e.preventDefault();
        
        var url = location.origin + location.pathname;
        history.pushState(null, null, url + '?' + $(this).serialize());
        
        $(this).request('ProductList::onAjaxRequest', {
            loading: $.oc.stripeLoadIndicator,
            update: {
                'products/ajax-list': '#products-ajaxList',
                'products/infinity-loader': '#infinity-loader',
            },
        });
    });
    
    $("#ajaxFilterForm input[type=checkbox]").on('change', function(e, context) {
        e.preventDefault();
        
        var url = location.origin + location.pathname;
        history.pushState(null, null, url + '?' + $(this).serialize());
        
        $(this).request('ProductList::onAjaxRequest', {
            loading: $.oc.stripeLoadIndicator,
            update: {
                'products/ajax-list': '#products-ajaxList',
                'products/infinity-loader': '#infinity-loader',
            },
        });
    });
    
    $(document).on('click', '.content .sort a', function(e, context) {
        e.preventDefault();
        var sort = $(this).data('sort');
        
        $(this).request('ProductList::onAjaxRequest', {
            loading: $.oc.stripeLoadIndicator,
            data: {sort: sort},
            update: {
                'products/ajax-list': '#products-ajaxList',
                'products/infinity-loader': '#infinity-loader',
            },
        });
    })
    
     
});