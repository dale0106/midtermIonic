angular.module('starter.controllers', [])

//I think param 'Chats'comes from view-title in tab-chats.html
.controller('ChatsCtrl', function ($scope, Chats) {

	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
	console.log($scope.chat);
})

//Fiction Controller
.controller('FictionCtrl', ['$scope', 'titleList', function ($scope, titleList, Fiction) {

	//$scope.fictions = Fiction.all();
	// create a handle to data.json file
	$scope.jsonData = titleList.data;

	//create array outside for loop to store fiction books
	$scope.myArray = [];

	//Get number of books
	var bookLength = $scope.jsonData.books.length;
	//console.log(bookLength);

	//For every book, check if cat_id on any of them is == 1 
	for (var i = 0; i < bookLength; i++) {
		if ($scope.jsonData.books[i].cat_id == 1) {

			//console.log($scope.jsonData.books[i]);
			//push the titles of these books into an our titleArray
			$scope.myArray.push($scope.jsonData.books[i]);
			//console.log($scope.myArray);
		}
	}
}])

//Fiction Details Controller
.controller('FictionDetailCtrl', function ($scope, $stateParams, Fiction) {

	//$scope.fiction = Fiction.all();
	//$scope.fiction = Fiction.get($stateParams.fictionId);
	//console.log($scope.fiction);

})

//Non-Fiction Controller
.controller('NonFictionCtrl', ['$scope', 'dataInfo', function ($scope, dataInfo) {

	$scope.nonFictionData = dataInfo.data;
	$scope.nonFictionArray = [];

	for (var x = 0; x < 16; x++) {

		if ($scope.nonFictionData.books[x].cat_id == 2) {

			//console.log($scope.nonFictionData.books[x]);
			$scope.nonFictionArray.push($scope.nonFictionData.books[x]);
		}
	}
}])

//History Controller
.controller('HistoryCtrl', ['$scope', 'historyInfo', function ($scope, historyInfo) {

	$scope.historyData = historyInfo.data;
	//console.log($scope.historyData);
	$scope.historyArray = [];

	for (var y = 0; y < 16; y++) {
		if ($scope.historyData.books[y].cat_id == 3) {
			//console.log()
			$scope.historyArray.push($scope.historyData.books[y]);
		}
	}

}])

//Science Controller
.controller('ScienceCtrl', ['$scope', 'scienceInfo', function ($scope, scienceInfo) {

	$scope.scienceData = scienceInfo.data;

	$scope.scienceArray = [];

	for (var v = 0; v < 16; v++) {
		if ($scope.scienceData.books[v].cat_id == 4) {

			$scope.scienceArray.push($scope.scienceData.books[v]);
		}
	}



}])