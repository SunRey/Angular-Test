"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    
    app.controller('CartController', function(){
        this.items = [];
        this.total = 0;

        this.newItem = { 
            quantity: 1 };

        this.addItem = function(cartForm) {
            this.items.push(this.newItem);
            this.newItem = { 
            quantity: 1 };
        };

/*        this.subTotal = function() {
            for(var i=0; i > this.items; i++) {
                this.total = (this.items[i].price * this.items[i].quantity);
            }
        };*/
    });
})();