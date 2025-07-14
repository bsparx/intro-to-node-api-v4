import prisma from "../db.js";
export const getProductsHandler = async (req, res) => {
    const { username, id } = req.user;
    const user = await prisma.user.findUnique({
        where: {
            id,
            username
        },
        include: {
            products: true
        }
    });
    res.json({ data: user.products });
};
export const getOneProductHandler = async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: {
            id,
            userId: req.user.id
        }
    });
    res.json({ data: product });
};
export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            userId: req.user.id
        }
    });
    res.json({ data: product });
};
export const updateProduct = async (req, res) => {
    const product = await prisma.product.update({
        data: {
            name: req.body.name,
        },
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    });
    res.json({ data: product });
};
export const deleteProduct = async (req, res) => {
    const product = await prisma.product.delete({
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    });
    res.json({ body: product });
};
