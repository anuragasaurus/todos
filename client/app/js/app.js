"use strict";

var app = angular.module("todosapp", []).config(["$provide", function($provide){
	$provide.factory("auth", ["$http", function($http) {
		const auth = {}

		auth.isUserLoggedIn = function() {
			let promise = new Promise((resolve, reject) => {
				if (localStorage.getItem("tuser") === null) {
					$http.get("/api/isuserloggedin").then((res) => {
						console.log(res);
						if (res.data) {
							localStorage.setItem("tuser", JSON.stringify(res.data));
						}
						resolve(res.data);
					});
				} else {

					resolve(JSON.parse(localStorage.getItem("tuser")));
				}
			})

			return promise;

		}

		return auth;
	}]);
}]);
