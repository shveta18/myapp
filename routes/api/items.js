const express = require('express');
const router = express.Router();

//Item Model

const Item = require('../../models/item');
const { default: Emotion } = require('../../client/src/components/emotion');

// routes GET to api/items to get all items
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// routes POST to api/items to get all items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        emotion: req.body.emotion,
        physical: req.body.physical

    });

    newItem.save().then(item => res.json(item));

});

// routes DELETES to api/items by ID
router.post('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}))
});
module.exports = router;