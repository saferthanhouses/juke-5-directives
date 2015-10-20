app.directive('dirArtistlinks', function() {
	return {
		restrict: 'E',
		scope: {
			artists: '='
		},
		templateUrl: 'templates/artistLinks.html',
	};
})