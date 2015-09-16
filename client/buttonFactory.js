app.factory('ButtonFactory', function($http) {
	return {
		sendMessage: function() {
			var message = {
				message: 'hi! how are you?'
			}

			return $http.post('/message', message).then(function(message) {
				return message.data;
			})
		}
	}
})