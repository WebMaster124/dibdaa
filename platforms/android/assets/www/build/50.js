webpackJsonp([50],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqPage = /** @class */ (function () {
    function FaqPage(googleanalytics, plt, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('FAQ');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    FaqPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.content._scroll) {
            this.content.ionScrollEnd.subscribe(function (data) {
                if (data == null)
                    return false;
                if (_this.plt.width() >= 769) {
                    if (data.scrollTop >= "130") {
                        $('.top-header').slideUp();
                    }
                    else {
                        $('.top-header').slideDown();
                    }
                }
                else {
                    if (data.scrollTop >= "130") {
                        $('.mobile-sell-now').slideUp();
                    }
                    else {
                        $('.mobile-sell-now').slideDown();
                    }
                }
            });
        }
    };
    FaqPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        }
        $(".searchanythingform").trigger("reset");
        $('body').removeClass().addClass('Faq body');
        $(document).prop('title', 'FAQ');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    FaqPage.prototype.gotoFaqDetailpage = function (val) {
        this.navCtrl.push('FaqListingPage', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], FaqPage.prototype, "content", void 0);
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/var/www/html/src/pages/faq/faq.html"*/'\n<ion-content padding class="faq">\n	<div class="wrapper">\n		<div class="container faq-page-main mb-3">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-3 setFontSize">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p class="mb-2 setFont">\n						<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;\n						<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n						<a class="breadcrumblink font-weight-bold" disabled>FAQ</a>\n					</p>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12 mt-3">\n					<h4>Frequently Asked Questions</h4>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12 mt-3 mb-3">\n					<img src="assets/images/FAQ-banner.jpg" class="faq-banner-image img-fluid">\n				</div>\n			</div>\n			<div class="row mb-3">\n				<div class="col-lg-12 col-md-12 col-12 mt-2 text-center">\n					<h4 class="mb-0">Popular Topics</h4>\n				</div>\n			</div>\n			<div class="row popular-topics mb-5 pl-3 pr-3 pl-lg-0 pr-lg-0">\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'1\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-tags tagsicon"></i>\n							<h6 class="mt-2">Listing</h6>\n							<p class="m-0 setFontSize">Product Identifiers, Motor Parts Compatibility and much more</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'2\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-gift"></i>\n							<h6 class="mt-2">Shipping</h6>\n							<p class="m-0 setFontSize">Printing Shipping Labels, deliveries, logistics and bulk shipping questions</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'3\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-globe"></i>\n							<h6 class="mt-2">Stores</h6>\n							<p class="m-0 setFontSize">Answers to how to set up and effectively manage your store</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'4\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-arrow-circle-left"></i>\n							<h6 class="mt-2">Returns</h6>\n							<p class="m-0 setFontSize">How to get through a tricky return, what to do when you get a returned item</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'5\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-handshake-o"></i>\n							<h6 class="mt-2">Seller Protection</h6>\n							<p class="m-0 setFontSize">Answers when something goes wrong in your transaction with the buyer</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					<a (click)="gotoFaqDetailpage(\'6\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-user-o"></i>\n							<h6 class="mt-2">Buyer</h6>\n							<p class="m-0 setFontSize">All you need to know about buying.</p>\n						</span>\n					</a>\n				</div>\n				<div class="col-lg-2 col-md-3 col-12 mt-2 p-3 text-center popular-topics-sub bg-light ml-2 mr-2 border rounded">\n					 <a (click)="gotoFaqDetailpage(\'7\')" class="popular-topics-link">\n						<span>\n							<i class="fa fa-user"></i>\n							<h6 class="mt-2">Seller</h6>\n							<p class="m-0 setFontSize">All you need to know about selling on Dibdaa.</p>\n						</span>\n					</a>\n				</div>\n			</div>\n		</div>\n			<!--================Footer Area =================-->\n	<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ })

});
//# sourceMappingURL=50.js.map