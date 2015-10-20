app.controller('AlbumsCtrl', function ($scope, allAlbums) {
	$scope.albums = allAlbums;
	console.log("allAlbums is: ", allAlbums)
});