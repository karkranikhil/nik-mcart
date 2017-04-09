"use strict";
var router_1 = require('@angular/router');
var mcartLogin_component_1 = require('./components/loginComponent/mcartLogin.component');
var productList_component_1 = require('./components/productListComponent/productList.component');
// Route Configuration
exports.routes = [
    { path: '', component: mcartLogin_component_1.LoginComponent },
    { path: 'productList', component: productList_component_1.productListComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map