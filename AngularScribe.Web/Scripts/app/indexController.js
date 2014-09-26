'use strict';
app.controller('indexController', ['$scope', '$http', function ($scope, $http) {

    var token = "Uelj5sYzYia6WV8KZ3lbNHwJPC73zfFbIeLLKG5TbEswYSIFL6y7dmBORuR6fn4aWjdvRJf67S4wjFwxUe-oKgp6ovf_QbPfcaOvDLCPorcJ8Z7AT10TMFbvQXHrmMG_wzL0OyWMTv6uxxBC3d6vrsijEfR865gDbBbxBPRaY2ma1aD8lzH87SwEy9AnFKjU4JQG7r3SghmqV5xHOVt8ALsBjPLG5l4vqgFZSrGbl9WrFmRPRw2e8v3f2PjLkUM-7e0E5SbcrlXENGs7qVzy8bKXQiRR8GHdpNBH3KvWz5krzbqJYCNkq8Rf764Os_K_Hlio9nMBdmWE0QVk5Tl8GY7eK2eJMn05AG7EOCUoEzLnAhXvlUIPhJ3YRDAluJpZuUE1eQ";
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    $scope.gridOptions = {
        sortable: true,
        selectable: true,
        pageable: true,
        columns: [
             { field: "id", title: "Id" },
             { field: "name", title: "Organization" }
        ],
        rowTemplate: "<tr data-uid='#: uid #'>" +
            "<td>{{dataItem.id}}</td>" +
            "<td>{{dataItem.name}}</td>" +
             "</tr>"
    ,
        dataSource: {
            transport: {
                read: function (e) {
                    $http({ method: 'GET', url: 'https://qaendpoint.scribesoft.com/v1/orgs' }).
                    success(function (data, status, headers, config) {
                        e.success(data);
                        }).
                    error(function (data, status, headers, config) {
                        alert('something went wrong');
                        console.log(status);
                    });
                },
                pageSize: 10
            }
        }
    }
}]);