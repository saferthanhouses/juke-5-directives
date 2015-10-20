app.directive('dirPlayer', function(PlayerFactory){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'templates/player.html',
		link: function(scope, element){
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			// scope.getPlayerCurrentSong = PlayerFactory.getCurrentSong();
			// console.log("getPlayerCurrentSong returned result:", scope.getPlayerCurrentSong)

			scope.isPlaying = PlayerFactory.isPlaying;
			scope.forward = PlayerFactory.next;
			scope.back = PlayerFactory.previous;

			scope.getPercent = function () {
				return (100 * PlayerFactory.getProgress()) + '%';
			};

			scope.toggle = function () {
				if (PlayerFactory.isPlaying()) PlayerFactory.pause();
				else PlayerFactory.resume();
			};				
		}
	}
})



/*
app.controller('PlayerCtrl', function ($scope, PlayerFactory) {

	$scope.getCurrentSong = PlayerFactory.getCurrentSong;
	$scope.isPlaying = PlayerFactory.isPlaying;
	$scope.forward = PlayerFactory.next;
	$scope.back = PlayerFactory.previous;

	$scope.getPercent = function () {
		return (100 * PlayerFactory.getProgress()) + '%';
	};

	$scope.toggle = function () {
		if (PlayerFactory.isPlaying()) PlayerFactory.pause();
		else PlayerFactory.resume();
	};

});
*/