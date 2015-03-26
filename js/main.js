/* https://savingsmultipliedssh.firebaseio.com/items.json */

function getResults(){

	$.ajax({
	  url: "https://savingproject.firebaseio.com//items.json",
	  dataType:"jsonp",
	  success:function(data){
	  	for (var i=0; i < data.length; i++) {
	  		console.log(data[i].price);
			$("#searchResults").append("<div class='col-md-3'>" + "<img src=" + data[i].image + " width='110' height='90'>" + data[i].title + data[i].price + data[i].seller + data[i].endDate + "</div>");
		}
	    }
	  });
}

getResults();
// var myResults = "https://savingsmultipliedssh.firebaseio.com/items.json";


