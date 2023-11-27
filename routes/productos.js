/*

    path: api/productos

*/

const { Router } = require("express");
const router = Router();
const { crearProducto, getProduct, getEspecificProducts, getAvailableProducts, getExpiratedProducts, getCategories, getProductoforId, getProducts, getProductsByCategory, getQuantityOfProductsByCategory, editProduct } = require("../controllers/producto");

module.exports = {
    crearProducto, editProduct, getProduct, getProductoforId, getProducts
};

router.post("/new", crearProducto);
router.post("/edit/:id", editProduct);
router.get("/", getProduct);
router.get("/unique-product/:codigo", getProductoforId);
router.get("/allproducts", getProducts);
// router.get("/by-category/:category", getProductsByCategory  );
// router.get("/quantity-category/:category", getQuantityOfProductsByCategory  );

module.exports = router;
