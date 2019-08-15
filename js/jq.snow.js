/**
 * js网页雪花效果jquery插件 
 * 懒人建站 www.51xuediannao.com   整理
 * @see http://workshop.rs
 */
(function($){
	
	$.fn.snow = function(options){
	
		// var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'top': '-50px' }).html('&#10052;'),
		console.log();
		var arr = ['☃', '&#10052;', '♡', '☂', '☾', 'Ⓛ', 'Ⓞ', 'Ⓔ', 'Ⓥ', '🌹']
		var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'top': '-50px' }),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,		//雪花的最小尺寸
									maxSize		: 20,		//雪花的最大尺寸
									newOn		: 1000,		//雪花出现的频率
									flakeColor	: "#FFFFFF"	
								},
				options			= $.extend({}, defaults, options);
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.html(arr[parseInt(Math.random() * 10)]).clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};
	
})(jQuery);