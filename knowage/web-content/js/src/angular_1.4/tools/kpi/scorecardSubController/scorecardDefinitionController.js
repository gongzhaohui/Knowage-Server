angular.module('scorecardManager').controller('scorecardDefinitionController', [ '$scope','sbiModule_translate' ,'sbiModule_restServices',scorecardDefinitionControllerFunction ]);

function scorecardDefinitionControllerFunction($scope,sbiModule_translate,sbiModule_restServices){
	$scope.addPerspective=function(){ 
		$scope.stepControl.insertBread({name: 'definizione prospettiva'});
	};
	$scope.test="test";
	$scope.scorecardName = undefined;
	$scope.name1 = "ciao";
	$scope.name2 = "ciaaaaaa";
	$scope.name3 = "ciaoooooooooo";
}