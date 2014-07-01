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
var indicatorShell = $('<img id="indicator-shell" src="http://rpmbuild.joshr.com/more-icons/red_dot.gif">'); 
var timetextShell = $('<div class="timetext-shell">12:00</div>');
var amchannelShell = $('<div class="amchannel-shell">AM     53  60  70  90 110 140 170      KHz</div>'); 
var fmchannelShell = $('<div class="fmchannel-shell">FM     88  92  96  102 106 108     MHz</div>'); 

	// outer shell into the main div container
	$('.container').append(outerShell);
	console.log('works');
	// puts inner shell into outershell
	outerShell.append(innerShell);
	innerShell.append(autoShell,amShell,pmShell,clockscreenShell,amchannelShell,fmchannelShell);
	clockscreenShell.append(indicatorShell, timetextShell);




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
			top: 73,
			left: 28,
			fontSize: 10
		})

		$(amShell).css({
			width: 20,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 53,
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
			width: 12,
			height: 12,
			position: "absolute",
			top: 4,
			left: 4,
	
		})
		$(timetextShell).css({
			width: 80,
			height: 20,
			position: "absolute",
			color: "red",
			top: -5,
			left: 50,
			fontSize: 75,
			// fontStyle: "digital"
			// fontFamily: 'BebasNeueRegular',
		})

		$(amchannelShell).css({
			width: 300,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 130,
			left: 100,
			fontSize: 10
		})

		$(fmchannelShell).css({
			width: 200,
			height: 10,
			background: "black",
			color: "white",
			position: "absolute",
			top: 145,
			left: 100,
			fontSize: 10
		})
});
	


// });
