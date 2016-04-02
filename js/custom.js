// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true, 

});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

var tipPerc = "1.10";

function tipStandard() {
	
	if (document.getElementById('txtAmount').value == "") {
		
		myApp.alert('Please enter an Amount.',"Oops!");
		
	} else {
	
	document.getElementById('tipStandard').setAttribute("class",'button button-round active');
	document.getElementById('tipKind').setAttribute("class",'button button-round');
	document.getElementById('tipGracious').setAttribute("class",'button button-round');	
	
	doCalc(1.10);
		
	}
}

function tipKind() {
	
	if (document.getElementById('txtAmount').value == "") {
		
		myApp.alert('Please enter an Amount.',"Oops!");
		
	} else {
		
	document.getElementById('tipStandard').setAttribute("class",'button button-round');
	document.getElementById('tipKind').setAttribute("class",'button button-round active');
	document.getElementById('tipGracious').setAttribute("class",'button button-round');	
	
	doCalc(1.15);
		
	}
}

function tipGracious() {
	
	if (document.getElementById('txtAmount').value == "") {
		
		myApp.alert('Please enter an Amount.',"Oops!");		
		
	} else {
		
	document.getElementById('tipStandard').setAttribute("class",'button button-round');
	document.getElementById('tipKind').setAttribute("class",'button button-round');
	document.getElementById('tipGracious').setAttribute("class",'button button-round active');	
	
	doCalc(1.20);
		
	}
}

function tipGenerous() {
	
	if (document.getElementById('txtAmount').value == "") {
		
		myApp.alert('Please enter an Amount.',"Oops!");
		
	} else {
		
	document.getElementById('tipStandard').setAttribute("class",'button button-round');
	document.getElementById('tipKind').setAttribute("class",'button button-round');
	document.getElementById('tipGracious').setAttribute("class",'button button-round');	
	
	doCalc(1.35);
		
	}
	
}

function doCalc(tipamount) {	
	
	document.getElementById('txtAmount').value = parseFloat(document.getElementById('txtAmount').value).toFixed(2); 
	
	var amount = document.getElementById('txtAmount').value;
	
	document.getElementById('txtTip').value = parseFloat((amount * tipamount) - amount).toFixed(2); 
	document.getElementById('txtTotal').value = parseFloat(amount * tipamount).toFixed(2); 
	
	document.getElementById('roundup').setAttribute("class",'button');
	document.getElementById('labelTip').innerHTML = "Tip (<small>" + parseFloat((tipamount - 1) * 100).toFixed(0) + "%</small>)";
	document.getElementById('calcContent').setAttribute("class",'list-block');
	
	tipPerc = tipamount;
}

function roundUp() {
	
	var amount = document.getElementById('txtAmount').value;
	var total = document.getElementById('txtTotal').value; 
	var totalNew = parseFloat(Math.ceil(total / 5) * 5).toFixed(2);
	var tipNew = parseFloat(totalNew - amount).toFixed(2);
	var tipPercNew = parseFloat((tipNew / amount) * 100).toFixed(2);
	
	document.getElementById('labelTip').innerHTML = "Tip (<small>" + tipPercNew + "%</small>)"
	
	document.getElementById('txtTotal').value = totalNew; 
	document.getElementById('txtTip').value = tipNew;
	
	document.getElementById('roundup').setAttribute("class",'button active');	
	
}