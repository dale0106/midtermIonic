angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider) {


	$stateProvider

	// setup an abstract state for the tabs directive
		.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:

	.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'templates/tab-chats.html',
					controller: 'ChatsCtrl'
				}
			}
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'templates/chat-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})

	//setup fiction state
	.state('tab.fiction', {
			url: '/fiction',
			views: {
				'tab-fiction': {
					templateUrl: 'templates/tab-fiction.html',
					controller: 'FictionCtrl'

				}
			},
			resolve: {
				titleList: function ($http) {

					return $http.get('data/data.json').then(
						function (response) {
							return response;
						})
				}
			}
		})
		.state('tab.fiction-detail', {
			url: '/fiction/:fictionId',
			views: {
				'tab-fiction': {
					templateUrl: 'templates/fiction-detail.html',
					controller: 'FictionDetailCtrl'
				}
			}
		})

	//setup non-fiction state 
	.state('tab.nonfiction', {
		url: '/nonfiction',
		views: {
			'tab-nonfiction': {
				templateUrl: 'templates/tab-nonfiction.html',
				controller: 'NonFictionCtrl'
			}
		},
		resolve: {
			dataInfo: function ($http) {

				return $http.get('data/data.json').then(
					function (response) {
						return response;
					})
			}

		}


	})

	//setup history state
	.state('tab.history', {
		url: '/history',
		views: {
			'tab-history': {
				templateUrl: 'templates/tab-history.html',
				controller: 'HistoryCtrl'

			}
		},
		resolve: {
			historyInfo: function ($http) {
				return $http.get('data/data.json').then(
					function (response) {
						return response;
					})
			}
		}

	})

	//Setup science state
	.state('tab.science', {
		url: '/science',
		views: {
			'tab-science': {
				templateUrl: 'templates/tab-science.html',
				controller: 'ScienceCtrl'

			}

		},
		resolve: {
			scienceInfo: function ($http) {
				return $http.get('data/data.json').then(
					function (response) {
						return response;
					})
			}
		}


	})


	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/fiction');

});