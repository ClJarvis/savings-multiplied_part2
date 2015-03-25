/* https://savingsmultipliedssh.firebaseio.com/items.json */

// +$(document).ready(function{
// +$('#myTab a').click(function (e) {
// +  e.preventDefault()
// +  $(this).tab('show')
// +})
// +
// +});

// var base_url = "https://savingsmultipliedssh.firebaseio.com/items.json";


function getResults($scope, $http) {
  $http.get('https://savingsmultipliedssh.firebaseio.com/items.json')
  .success(function(data) { $scope.items = data.items; })
  .error(function(data) { console.log('error'); });
  console.log($scope.items);
}

function getResults(){
$.ajax({
  url: "https://savingsmultipliedssh.firebaseio.com/items.json",
  dataType:"jsonp",
  success:function(data){
  // console.log(data.items.image);
  // console.log(data.index);
  var item=data.items;
   }
 })
}

var i;
var myResults = "https://savingsmultipliedssh.firebaseio.com/items.json";
for (var i=0; i < myResults.length; i++) {
  // console.log(myResults[i]);
}

getResults();

// LOOP over array
// console.log(scope.items)

// ['giv','wh','th'].map(p=>`${p}en`).join('.');
// [for (p of ['giv','wh','th']) `${p}en`].join('.');
