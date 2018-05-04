function submitSearch(){
	var ok=true;
	
	var tripType=$("#id-fldTripType option:selected").val();
	
	var isRoundTrip=(tripType==1) || (tripType==2);
	var isOneWay=(tripType==3) || (tripType==4);
	var isMultiStep=(tripType==5);
	
	//console.log("tripType="+tripType+"  ");
	//console.log("isRoundTrip = "+isRoundTrip+" | isOneWay = "+isOneWay+" | isMultiStep = "+isMultiStep);
	
	
	if(isOneWay || isRoundTrip){
		var dep=$("#id-fldDeparture");
		var arr=$("#id-fldArrival");
		var dtFrom=$("#fldDateFrom");
		var dtTo=$("#fldDateTo");
		
		if(dep.val()==''){
			alert("Inserire una partenza.");
			dep.focus();
			ok=false;
			
		}else if(arr.val()==''){
			alert("Inserire un arrivo.");
			arr.focus();
			ok=false;
			
		}else if(dtFrom.val()==''){
			alert("Inserire una data di andata.");
			dtFrom.focus();
			ok=false;
			
		}else if(dtTo.val()=='' && isRoundTrip){	
			alert("Inserire una data di ritorno.");
			dtTo.focus();
			ok=false;
		}
		
	}else if(isMultiStep){
		var idx=0;
		$(".soaLegNumberSelected:visible").each(function(index){
			idx=eval(index+1);
			
			if($("#id-fldDeparture"+idx).val()==''){
				alert("Inserire una partenza per la tappa "+idx+".");
				$("#id-fldDeparture"+idx).focus();
				ok=false;
				return false;
				
			}else if($("#id-fldArrival"+idx).val()==''){
				alert("Inserire una partenza per la tappa "+idx+".");
				$("#id-fldArrival"+idx).focus();
				ok=false;
				return false;
				
			}else if($("#fldDateFrom"+idx).val()==''){
				alert("Inserire una data per la tappa "+idx+".");
				$("#fldDateFrom"+idx).focus();
				ok=false;
				return false;
			}
			
		});
		
		
	}
	
	if(ok){
		$('#dialog-message').dialog('open');
		document.searchForm.submit();
	}
}


function setTripType(val){
	
	var flds="#fldDateTo,#id-fldDateToHour";
	// solo andata...
	if(val==3 || val==4) {
		$(flds).prop( "disabled", true );
		$(flds).addClass("soaButtonDisabled");
	}else{
		$(flds).prop( "disabled", false );
		$(flds).removeClass("soaButtonDisabled");
	} 
	
	// Multistep...
	if(val==5) {
		$("#multistep").show();
		$("#roundtrip").hide();
	}else{
		$("#roundtrip").show();
		$("#multistep").hide();
	}
	
}

function showLegs(val){
	
	
	$(".soaLegNumberSelected").each(function(index){
		$(this).hide();
					
		if((index+1)<=val){
			$(this).show();
		}
	});
	
}


$(document).ready(function(){
	
	
 
	
	// Search destinations...
	if ($("#id-fldDeparture").length>0){
		
		$('#id-fldDeparture').bind("change paste keyup", function() {
			
			var currVal=$(this).val();
			
			$("#id-fldDeparture").soaAutocomplete({
	            source: function( request, response ) {
					var arrVals = [];
					
					
					$.get(urlAirline+"?airp="+currVal, function() {
						
					}).done(function(data) {
						
						
						$(data).find("a").each(function(suggestion){
						  		var itemSuggestion = {label:'',value:'',code: ''};
						  		itemSuggestion.label = __highlight($(this).find("name").text(), currVal);
						  		itemSuggestion.value = $($(this).find("name").text()).text();
						  		itemSuggestion.code = $(this).find("id").text();
						  		arrVals.push(itemSuggestion);
						  		
						  		
					   });
					   
					   response(arrVals);
					   
					   

					}).fail(function(jqxhr, textStatus, error ){
					    var err = textStatus + ", " + error;
					    console.log( "Request Failed: " + err );
					    
					});
					
	            	
	            }, // fine source...
	            select: function (event, ui) { 
	            	$("#id-fldCodeDeparture").val(ui.item.code); 
	            },
	            minLength: 3,
				delay: 0
	            
	        });
	       
			
		});
	}
	 
	/* Search destinations...
	if ($("#id-fldStationTo").length>0){
		
		$('#id-fldStationTo').bind("change paste keyup", function() {
			var currVal=$(this).val();
			
			$("#id-fldStationTo").soaAutocomplete({
	            source: function( request, response ) {
					var arrVals = [];
					
					$.get(urlStation+"?airline="+currVal, function() {
						
					}).done(function(data) {
						
						$(data).find("ts").each(function(suggestion){
						  		var itemSuggestion = {label:'',value:'',code:''};
						  		itemSuggestion.label = __highlight($(this).text(), currVal);
						  		itemSuggestion.value = $(this).text();
						  		itemSuggestion.code = $(this).attr("code");
						  		arrVals.push(itemSuggestion);
					   });
					   
					   response(arrVals);

					}).fail(function(jqxhr, textStatus, error ){
					    var err = textStatus + ", " + error;
					    console.log( "Request Failed: " + err );
					    
					});
					
	            	
	            }, // fine source...
	            select: function (event, ui) { 
	            	$("#id-fldCodeStationTo").val(ui.item.code);
	            },
	            minLength: 3,
				delay: 0
	            
	        });
	       
			
		});
	} */
	
	
});


$.widget( "custom.soaAutocomplete", $.ui.autocomplete, {
	 _create: function() {
	        this._super();
	        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
	},
	_renderItem: function( ul, item ) {
		 return $( "<li>" )
	     .append( "<a>" + item.label+"</a>" )
	     .appendTo( ul );
	}

});

function __highlight(s, t) {
	  var matcher = new RegExp("("+$.ui.autocomplete.escapeRegex(t)+")", "ig" );
	  return s.replace(matcher, "<span class='highlighted'>$1</span>");
	}











