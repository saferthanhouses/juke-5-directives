app.directive('dirAlbumslist',function(){
	return {
		restrict: 'E',
		scope: {
			albums: '='
		},
		templateUrl: 'templates/albumsList.html',
	}
})