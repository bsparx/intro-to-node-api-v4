import { Router } from 'express';
const router = Router();
import { body } from 'express-validator';
import { createProduct, deleteProduct, getOneProductHandler, getProductsHandler } from './handlers/product.js';
import { getUpdate } from './handlers/update.js';
/* Product */
router.get('/product', getProductsHandler);
router.get(`/product/:id`, getOneProductHandler);
router.put(`/product/:id`, (req, res) => {
});
router.post(`/product`, body('name').isString().notEmpty().isLength({
    min: 2
}), createProduct);
router.delete(`/product/:id`, deleteProduct);
/* Updates */
router.get(`/updatepoint`, (req, res) => {
});
router.get(`/updatepoint/:id`, getUpdate);
router.put(`/updatepoint/:id`, (req, res) => {
});
router.post(`/updatepoint`, (req, res) => {
});
router.delete(`/updatepoint/:id`, (req, res) => {
});
export default router;
