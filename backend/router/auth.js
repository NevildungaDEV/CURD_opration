const express = require('express');
const router = express.Router();

require('../db/conn');
const productModel = require("../module/productSchema")


// all records
router.post('/Record', async (req, res) => {
    try {

        const { name, number, category, price, total } = req.body

        if (!name || !number || !category || !price || !total) {
            return res.status(422).json({ error: "plz fil the field properly" });
        } else {

            const result = await productModel({ name, number, category, price, total })
            
            const exitsData = await result.save();
            if (exitsData) {
                res.status(201).json({ success: true, message: 'successfully product added...' })
            }
        }

    } catch (err) {
        console.log(err);
    }
})



router.get("/allrecordproducts", async (req, res) => {
    try {
        const data = await productModel.find()

        if (data) {
            res.status(201).json({ success: true, result: data })
        }


    } catch (error) {

    }
})


// delete 
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await productModel.findByIdAndDelete({ _id: id })
        if (result) {
            res.status(201).json({ success: true, msg: "Product Record Deleted Succesfully..." })
        }

    } catch (error) {
        console.log(error);
    }
})


//edit
router.get("/singlerecord/:id", async (req, res) => {

    const id = req.params.id

    try {
        const result = await productModel.findById({ _id: id })

        if (result) {
            res.status(201).json({ success: true, result:result })
        }

    } catch (error) {
        console.log(error);
    }
})

router.put("/edit/:id", async (req, res) => {

    const id = req.params.id

    try {
        const result = await productModel.findByIdAndUpdate({ _id: id }, req.body.addData, {
            new: true
        })
        if (result) {
            res.status(201).json({ success: true, msg: "Product Record Updated Succesfully..." })
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
