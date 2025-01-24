const express = require("express");
const userSignUpController = require("../controller/user/userSignUp.js");
const userLoginController = require("../controller/user/userLogin.js");
const { signUpValidation, loginValidation } = require("../middlewares/authValidation.js");
const ensureAuthentication = require("../middlewares/auth.js");
const userDetailsController = require("../controller/user/userDetails.js");
const allUsers = require("../controller/user/allUsers.js");
const updateUser = require("../controller/user/updateUser.js");
const uploadProductController = require("../controller/product/uploadProduct.js");
const getProductController = require("../controller/product/getProduct.js");
const updateProductController = require("../controller/product/updateProduct.js");
const getCategoryProduct = require("../controller/product/getCategoryProduct.js");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct.js");
const getProductDetails = require("../controller/product/getProductDetails.js");
const addToCartController = require("../controller/user/addToCart.js");
const viewAddToCart  = require("../controller/user/viewAddToCart.js");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct.js");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct.js");
const searchProduct = require("../controller/product/searchProduct.js");

const router = express.Router();

router.post("/sign-up",signUpValidation, userSignUpController)
router.post("/login",loginValidation, userLoginController)
router.get("/user-details", ensureAuthentication, userDetailsController);
router.get("/all-users",ensureAuthentication, allUsers);
router.post("/update-user",ensureAuthentication, updateUser);

// product
router.post("/upload-product",ensureAuthentication, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product",ensureAuthentication, updateProductController);
router.get("/get-category", getCategoryProduct);
router.post("/get-category-wise-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search",searchProduct);

// add to cart

router.post("/addtocart", ensureAuthentication, addToCartController);
router.get("/view-cart-product", ensureAuthentication, viewAddToCart);
router.post("/update-cart-product",ensureAuthentication,updateAddToCartProduct);
router.post("/delete-cart-product",ensureAuthentication,deleteAddToCartProduct);



module.exports = router;