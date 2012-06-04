(function( $ ){

  $.fn.iMap = function(options) {
       var params = $.extend( {
      'url'         : 'ifr.html',
      'frameborder':"0",
      'scrolling':"no",
      'marginheight':"0",
      'marginwidth':"0",
      'alt': "A map, which nobody put alternet text inside"
    }, options);
   return this.each(function() { 
       var $this = $(this);
       var content = '<iframe width="100%" height="100%" frameborder="' + params.frameborder + '" scrolling="' + params.frameborder + '" marginheight="' + params.marginheight + '" marginwidth="' + params.marginwidth + '" src="' + params.url + '">' + params.alt + '</iframe>';
       $this.empty().append(content);
   });
  };
})( jQuery );