(function () {
    'use strict';


    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // Buy Controller

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController (ShoppingListCheckOffService) {
        var buyCtrlr = this;

        buyCtrlr.items = ShoppingListCheckOffService.getItemsToBuy();

        buyCtrlr.toBuyItem = function (itemIndex) {
            ShoppingListCheckOffService.toBuyItem(itemIndex);
        };
    };

    // Already BouthController

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var alreadyItemBought = this;

        alreadyItemBought.items = ShoppingListCheckOffService.getItemsToBought();
    };

    function ShoppingListCheckOffService() {
        
        var service = this;

        var itemsToBuy = [];
        var itemsToBought = [];

        itemsToBuy = InitialiseBuyList();

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsToBought = function () {
            return itemsToBought;
        };

        service.toBuyItem = function (itemIndex) {
            var removedItems = itemsToBuy.splice(itemIndex,1);
            itemsToBought.push(removedItems[0]);
        };
    };

    function InitialiseBuyList() {
        return [{name: "Laptop", quantity: 5},
                {name: "Mobile", quantity: 5},
                {name: "Printer", quantity: 2},
                {name: "Snackfg", quantity: 5},
                {name: "Switch", quantity: 1}];
    };

})();