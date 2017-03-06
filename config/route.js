app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/registro', {
        templateUrl: 'views/registro.html'
    })
    .when('/reportar', {
        templateUrl: 'views/reportar.html'
    })
    .when('/publicacao/:id', {
        templateUrl: 'views/publicacao.html'
    })
    .when('/listar', {
        templateUrl: 'views/listar.html'
    })
    .when('/usuarios', {
        templateUrl: 'views/usuarios.html'
    })
    .when('/alterarSenha', {
        templateUrl: 'views/alterarSenha.html'
    })
    .when('/publicar/:tipo', {
        templateUrl: 'views/publicar.html'
    })
    .when('/publicar/:tipo/:id', {
        templateUrl: 'views/publicar.html'
    })
    .when('/email', {
        templateUrl: 'views/email.html'
    })
    .when('/removerEmail/:token', {
        templateUrl: 'views/removerEmail.html'
    })
    .when('/sugestoes', {
        templateUrl: 'views/sugestoes.html'
    })
    .when('/sugestoes/:id', {
        templateUrl: 'views/openSugestao.html'
    })
    .when('/feed', {
        templateUrl: 'views/feed.html'
    })
    .when('/emailsCadastrados', {
        templateUrl: 'views/emailsCadastrados.html'
    })
    .when('/calendario', {
        templateUrl: 'views/calendario.html'
    })
});
