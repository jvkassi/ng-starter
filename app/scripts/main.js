'use strict';

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', ['application.services']);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);


var app = angular.module('first', [
    'ui.router', 'application.controllers'
]);


app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // TODO : Handle acl
        $stateProvider
            .state('root', {
                // url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: '/views/partials/header.html',
                        // controller: 'HeaderCtrl',
                    },
                    'footer': {
                        templateUrl: '/views/partials/footer.html',
                        // controller: 'HeaderCtrl',
                    }
                }
            })
            .state('root.home', {
                url: '/',
                views: {
                    'container@': {
                        templateUrl: '/views/home.html',
                        // controller: 'HomeCtrl',
                    }
                }
            })
            .state('root.presentation', {
                url: '/presentation',
                views: {
                    'container@': {
                        templateUrl: '/views/presentation.html',
                        // controller: 'HomeCtrl',
                    }
                }
            })
            .state('root.services', {
                url: '/services',
                views: {
                    'container@': {
                        templateUrl: '/views/services.html',
                        // controller: 'HomeCtrl',
                    }
                }
            })
            .state('root.achievements', {
                url: '/achievements',
                views: {
                    'container@': {
                        templateUrl: '/views/achievements.html',
                        // controller: 'HomeCtrl',
                    }
                }
            })

        .state('root.partners', {
            url: '/partners',
            views: {
                'container@': {
                    templateUrl: '/views/partners.html',
                    // controller: 'HomeCtrl',
                }
            }
        })
            .state('root.contacts', {
                url: '/contacts',
                views: {
                    'container@': {
                        templateUrl: '/views/contacts.html',
                        // controller: 'HomeCtrl',
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }
]);
