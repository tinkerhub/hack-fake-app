"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 6551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_FeedTitle)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/constants/Images.ts + 1 modules
var Images = __webpack_require__(2212);
;// CONCATENATED MODULE: ./src/components/FeedTitle/FeedTitle.tsx




function FeedTitle({ title }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "h-48 w-48 rounded-full mx-auto",
                src: Images/* default */.Z.circleSVG,
                alt: "Circles"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl lg:text-2xl text-center font-medium",
                children: title
            })
        ]
    });
}
/* harmony default export */ const FeedTitle_FeedTitle = (FeedTitle);

;// CONCATENATED MODULE: ./src/components/FeedTitle/index.ts

/* harmony default export */ const components_FeedTitle = (FeedTitle_FeedTitle);


/***/ }),

/***/ 4788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.tsx


function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                className: "progress w-full top-0 fixed [&::-webkit-progress-value]:rounded-none [&::-webkit-progress-bar]:bg-background [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary",
                value: 30,
                max: 100
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "text-3xl font-bold text-primary pl-4 pt-4 lg:pl-8 lg:pt-8 lg:text-4xl",
                children: [
                    "hack ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " fake"
                ]
            })
        ]
    });
}
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Navbar/index.ts

/* harmony default export */ const components_Navbar = (Navbar_Navbar);


/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_ScrollButtons)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/ScrollButtons/ScrollButtons.tsx


function ScrollButtons() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "join fixed right-4 top-4 md:bottom-4 md:top-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn bg-primary border-none hover:bg-accent text-background font-bold text-xl join-item",
                children: "↑"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn bg-primary border-none hover:bg-accent text-background font-bold text-xl join-item",
                children: "↓"
            })
        ]
    });
}
/* harmony default export */ const ScrollButtons_ScrollButtons = (ScrollButtons);

;// CONCATENATED MODULE: ./src/components/ScrollButtons/index.ts

/* harmony default export */ const components_ScrollButtons = (ScrollButtons_ScrollButtons);


/***/ }),

/***/ 5293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_WithAuth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./src/store/Hooks.ts
var Hooks = __webpack_require__(7858);
;// CONCATENATED MODULE: ./src/components/WithAuth/WithAuth.tsx




// eslint-disable-next-line @typescript-eslint/naming-convention
const WithAuth = (WrappedComponent)=>{
    const WithAuth = (props)=>{
        const isAuthenticated = (0,Hooks/* useAppSelector */.C)((state)=>{
            return state.authReducer.isAuthenticated;
        });
        const router = (0,navigation.useRouter)();
        (0,react_.useEffect)(()=>{
            if (!isAuthenticated) {
                // Redirect to login page
                router.push("/");
            }
        }, [
            isAuthenticated,
            router
        ]);
        return isAuthenticated ? /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
            ...props
        }) : null;
    };
    return WithAuth;
};
/* harmony default export */ const WithAuth_WithAuth = (WithAuth);

;// CONCATENATED MODULE: ./src/components/WithAuth/index.ts

/* harmony default export */ const components_WithAuth = (WithAuth_WithAuth);


/***/ })

};
;