var app = angular.module('ButtonApp', []);

app.controller('ButtonController', function(ButtonFactory, $scope) {
	$scope.sendMessage = function() {
		console.log('attempting message sending to back end')
		ButtonFactory.sendMessage()
					 .then(function(messageData) {
					 	console.log(messageData)
					 })
	}
});