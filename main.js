$(document).on('ready', function() {

  

// $('.container').on('ready',function(){
// 	$('.container').append(outerShell)
// 	console.log('itworks')

 






var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>'); 
var autoShell = $('<div class="auto-shell">AUTO</div>'); 
var amShell = $('<div class="am-shell">AM</div>'); 
var pmShell = $('<div class="pm-shell">PM</div>'); 
var clockscreenShell = $('<div class="clockscreen-shell"></div>'); 
var indicatorShell = $('<img class="indicator-shell src="http://rpmbuild.joshr.com/more-icons/red_dot.gif">'); 
	
	// outer shell into the main div container
	$('.container').append(outerShell)
	console.log('works')
	// puts inner shell into outershell
	outerShell.append(innerShell);
	innerShell.append(autoShell,amShell,pmShell,clockscreenShell)
	clockscreenShell.append(indicatorShell)




	// defines CSS properties of the outer shell, 
		$(outerShell).css({
			width: 500,
			height: 250,
			background: "gray",
			position: "absolute",
			top: 50,
			left: 400,
			// zIndex: 1
		})

		$(innerShell).css({
			width: 400,
			height: 175,
			background: "black",
			position: "absolute",
			top: 40,
			left: 50,
			// zIndex: 0
		})

		$(autoShell).css({
			width: 20,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 115,
			left: 15,
			fontSize: 10
		})

		$(pmShell).css({
			width: 20,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 70,
			left: 28,
			fontSize: 10
		})

		$(amShell).css({
			width: 20,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 50,
			left: 28,
			fontSize: 10
		})

		$(clockscreenShell).css({
			width: 300,
			height: 73,
			background: "darkred",
			position: "absolute",
			top: 50,
			left: 50,
		})

		$(indicatorShell).css({
			width: 20,
			height: 50,
			// background: "black",
			// color: "red",
			position: "absolute",
			top: 0,
			left: 5,
			// fontSize: 50
		})
});
	


// });
