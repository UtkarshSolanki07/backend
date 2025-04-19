const Book=require('../models/bookModel');

exports.getBooks=async(requestAnimationFrame,res)=>{
    const books=await Book.find();
    res.json(books);
};

exports.createBook=async(req,res)=>{
    const book=new Book(req.body);
    const saved=await book.save();
    res.status(201).json(saved);
};

exports.deleteBook=async(req,res)=>{
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send('Book deleted');
};