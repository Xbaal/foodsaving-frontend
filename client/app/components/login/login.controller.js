class LoginController {
  constructor($scope, $state, Authentication) {
    "ngInject";
    this.name = "login";
    this.$scope = $scope;
    this.$state = $state;
    this.Authentication = Authentication;
    $scope.user = "";
    $scope.password = "";
    $scope.remember = false;
  }

  login() {
    this.Authentication.login(this.$scope.user, this.$scope.password)
    .then(() => {
      this.$scope.loginStatus = "success";
      this.$scope.loginForm.$error.failed = false;
      this.$state.go("home");
    }).catch(() => {
      this.$scope.loginForm.$error.failed = true;
      this.$scope.password = "";
    });
  }
}

export default LoginController;
