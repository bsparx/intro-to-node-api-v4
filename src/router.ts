import { Router } from 'express'
const router = Router()



/* Product */
router.get('/product', (req, res) => {
    
    console.log("It goes got product")
    res.json({ message: "Summoner" })
    return;
})


router.get(`/product/:id`, (req, res) => {

})

router.put(`/product/:id`, (req, res) => {

})

router.post(`/product`, (req, res) => {

})

router.delete(`/product/:id`, (req, res) => {

})

/* Updates */


router.get(`/updatepoint`, (req, res) => {

})


router.get(`/updatepoint/:id`, (req, res) => {

})

router.put(`/updatepoint/:id`, (req, res) => {

})

router.post(`/updatepoint`, (req, res) => {

})

router.delete(`/updatepoint/:id`, (req, res) => {

})


export default router