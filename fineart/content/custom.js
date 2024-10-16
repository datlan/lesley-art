	$(document).ready(function(){

		$('.jcarousel-skin-tango').addClass('gallery_demo'); // adds new class name to maintain degradability
		
		$('ul.gallery_demo').galleria({
			history   : true, // activates the history object for bookmarking, back-button etc.
			clickNext : true, // helper for making the image clickable
			insert    : '#main_image', // the containing selector for our main image
			onImage   : function(image,caption,thumb) { // let's add some image effects for demonstration purposes
				
				// fade in the image & caption
				image.css('display','none').fadeIn(1000);
				caption.css('display','none').fadeIn(1000);
				
//				// fetch the thumbnail container
//				var _li = thumb.parents('li');
//				
//				// fade out inactive thumbnail
//				_li.siblings().children('img.selected').fadeTo(500,0.3);
//				
//				// fade in active thumbnail
//				thumb.fadeTo('fast',1).addClass('selected');
				
				// add a title for the clickable image
				image.attr('title','Next image >>');
				
				$('#main_image').trigger('img_change');
			},
			onThumb : function(thumb) { // thumbnail effects goes here
				
//				// fetch the thumbnail container
//				var _li = thumb.parents('li');
//				
//				// if thumbnail is active, fade all the way.
//				var _fadeTo = _li.is('.active') ? '1' : '0.3'; */
//				var _fadeTo = _li.is('.active') ? '1' : '1';
//				
//				// fade in the thumbnail when finnished loading
//				thumb.css({display:'none',opacity:_fadeTo}).fadeIn(1500);
//				
//				// hover effects
//				thumb.hover(
//					function() { thumb.fadeTo('fast',1); },
//					function() { _li.not('.active').children('img').fadeTo('fast',0.3); } // don't fade out if the parent is active

//				)
			}
		});
//		jQuery('#mycarousel').jcarousel({
  //      	scroll: 6,
//	        initCallback: mycarousel_initCallback
		jQuery('#mycarousel').jcarousel({
        	scroll: 6
	});
});
