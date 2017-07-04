
application.controller("placeController", function($scope){
   $scope.tourists=[{place:"Patalpani Waterfall", distance:35, transport:"car", attraction:"Waterfall",rating:2},{place:"Bahadur Mahal, Mandu",distance:100, transport:"car", attraction:"Historical & Architectural Importance",rating:4},{place:"Ahilya Fort, Maheshwar", distance:91, transport:"car", attraction:"Amazing place",rating:1},{place:"Ralamandal Wildlife Sanctuary", distance:20, transport:"car", attraction:"Good for Trekking",rating:5},{place:"Omkareshwar Mahadev, Omkareshwar", distance:78, transport:"car", attraction:"A holy place of Lord Shiva",rating:8},{place:"Mahakaleshwar Jyotirlinga, Ujjain", distance:56, transport:"car", attraction:"Ancient Siva Temple",rating:7},{place:"Lakshmi Narayan Temple,Bhopal", distance:170, transport:"car", attraction:"Very peace and beautiful location",rating:3},{place:"Sacred Sanchi", distance:240, transport:"car", attraction:"Sanchi sacred place for Buddhists",rating:6}];
   $scope.unit="km";
	$scope.add = function ()
	{
	var obj={};
	obj.place=$scope.Tplace;
	obj.distance=$scope.Tdistance;
	obj.transport=$scope.Ttransport;
	obj.attraction=$scope.Tattraction;
	obj.rating=$scope.Trating;
	$scope.tourists.push(obj);
	}

	$scope.delete=function(obj)
	{
	$scope.tourists.splice($scope.tourists.indexOf(obj),1);
	}

	$scope.tour="";
	$scope.search= function(item)
	{
	 if (item.place.indexOf($scope.tour)!=-1)
	 {
	    return true;
	 }
	 else
	 {
	   return false;
	 }
	}

	$scope.order=function(ord)
	{
		if ($scope.orderByMe==ord)
		{
			$scope.orderByMe='-'+ord;
		}
		else
		{
			$scope.orderByMe=ord;
		}
	}

	$scope.show= function(un)
	{
		$scope.unit=un;
		console.log($scope.unit);
	}

});
application.filter("UnitChange",function () {
  var uc = function (distance,unit) {
    if(unit=="km")
    {
      return distance+"km";
    }
    if(unit=="miles")
    {
      return (distance*0.6)+"miles";
    }

  }
  return uc;
});
