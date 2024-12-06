// productRoute.js
import express from 'express';
import { album, comment, photo, post } from './dataRoutes.js';

export const router = express.Router(); // Exporting the router

// Route for the root product page
router.get('/', (req, res) => {
    res.send('Welcome to the Product page');
});

// Dynamic route for product IDs
router.get('/dynamic/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Your dynamic id is: ${id}`);
});


router.get('/post' , (req,res)=>{
    res.send(post)
});
router.get('/comment' , (req,res)=>{
    res.send(comment)
});
router.get('/album' , (req,res)=>{
    res.send(album)
});
router.get('/photo' , (req,res)=>{
    res.send(photo)
});



// router.post('/user' , (req,res)=>{
//     res.send('know this post data is it showing')
// })

// router.delete('/user', (req,res)=>{
// res.send('delete')
// })

// router.put('/user' , (req,res)=>{
// res.send('put')
// })
