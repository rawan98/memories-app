const express = require('express');
const router = express.Router();
const multer = require('multer');
const Entry = require('../../models/Entry');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads');
    },
    filename: function(req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});
// const fileFilter = (req, file, callback) => {
//     if(file.mimeType== 'image/jpeg' || file.mimeType== 'image/png'){
//         callback(null, true); // accept jpeg and png files ; instead of null we can have new Error('msg')
//     }
//     else{
//         callback(null, false); // reject other extensions
//     }
// }
const upload = multer({storage, limits: { fieldSize: 10 * 1024 * 1024 }});


router.get('/', (req, res) => {
    Entry.find()
        .sort({date: -1})
        .then(entries => res.json(entries)) //send json response
})

router.post('/', upload.single('image'), (req, res) => {
    console.log(req.file); 
    const newEntry = new Entry({
        image: req.file.path,
        caption: req.body.caption
    });

    newEntry.save()
        .then(entry => res.json(entry));
})

router.delete('/:id', (req, res) => {
    Entry.findById(req.params.id)
     .then(entry => {
         entry.remove(); // delete from mongo db
         fs.unlinkSync(entry.image); // delete from uploads folder
        })
      .then(() => res.json({success: true}))
     .catch(err => res.status(404).json({success: false}));
})

module.exports = router;