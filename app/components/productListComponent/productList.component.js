"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var productItem_service_1 = require("../../services/productItem.service");
var productListComponent = (function () {
    function productListComponent(_productService) {
        this._productService = _productService;
        this.hideImages = false;
    }
    productListComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getProducts().then(function (productslistResponse) { return _this.mobileList = productslistResponse; });
    };
    productListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    productListComponent.prototype.hideImagesFunc = function () {
        this.hideImages = true;
    };
    productListComponent.prototype.showImagesFunc = function () {
        this.hideImages = false;
    };
    productListComponent = __decorate([
        core_1.Component({
            selector: 'mcart-product-list',
            templateUrl: 'app/components/productListComponent/productList.component.html',
            styleUrls: ['app/components/productListComponent/productList.component.css'],
            providers: [productItem_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [productItem_service_1.ProductService])
    ], productListComponent);
    return productListComponent;
}());
exports.productListComponent = productListComponent;
//# sourceMappingURL=productList.component.js.map