var app = angular.module('kpiDefinitionManager').controller('listController', ['$scope','sbiModule_translate' ,"$mdDialog","sbiModule_restServices","$q","$mdToast",'$angularListDetail','$timeout',KPIDefinitionListControllerFunction ]);

function KPIDefinitionListControllerFunction($scope,sbiModule_translate,$mdDialog, sbiModule_restServices,$q,$mdToast,$angularListDetail,$timeout){
	$scope.translate=sbiModule_translate;
	$scope.measureFormula="";
	$scope.currentKPI ={
			"formula": ""
	}

	$scope.addKpi= function(){
		angular.copy($scope.emptyKpi,$scope.kpi);
		
		$timeout(function(){
			$scope.selectedTab.tab=0;
		},0)

		$angularListDetail.goToDetail();
		$scope.flagActivateBrother('addEvent');

	}
	$scope.loadKPI=function(item){


		sbiModule_restServices.promiseGet("1.0/kpi",item.id+"/loadKpi")
		.then(function(response){ 

			angular.copy({},$scope.cardinality);
			$timeout(function(){
				$scope.selectedTab.tab=0;
			},0)

			angular.copy(response.data,$scope.kpi); 
			console.log($scope.kpi);
			$scope.flagActivateBrother('loadedEvent');

		},function(response){
			console.log("errore")
		});

	}
	$scope.$on('savedEvent',function(e){
		$scope.kpiList=[];
		$scope.kpiListOriginal=[];
		$angularListDetail.goToList();
		$scope.getListKPI();
	});
	$scope.$on('cancelEvent', function(e) {  
		$angularListDetail.goToList();
	});
	$scope.$on('deleteKpiEvent', function(e) { 
		$scope.kpiList=[];
		$scope.kpiListOriginal=[];
		$scope.getListKPI();
		$angularListDetail.goToList();
	});
	$scope.getListKPI = function(){
		sbiModule_restServices.promiseGet("1.0/kpi","listKpi")
		.then(function(response){ 
			angular.copy(response.data,$scope.kpiListOriginal);
			for(var i=0;i<response.data.length;i++){
				var obj = {};
				obj["name"]=response.data[i].name;
				if(response.data[i].category!=undefined){
					obj["valueCd"] = response.data[i].category.valueCd;
				}
				obj["author"]=response.data[i].author;
				obj["datacreation"]=new Date(response.data[i].dateCreation);
				obj["id"]=response.data[i].id;
				$scope.kpiList.push(obj);
			}
		},function(response){
			console.log("errore")
		});
	}
	$scope.getListKPI();

	$scope.indexInList=function(item, list) {

		for (var i = 0; i < list.length; i++) {
			var object = list[i];
			if(object.id==item.id){
				return i;
			}
		}

		return -1;
	};
}