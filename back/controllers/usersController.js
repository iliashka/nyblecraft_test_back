const User = require('../models/usersModel')
const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.newUser = async (req, res, next) => {
    try {
        const {firstName, lastName, image} = req.body;
        const newUser = await User.create({firstName: firstName, lastName: lastName, image: image});
        res.status(200).json({
            message: "всё гуд"
        })
    } catch (error) {
      next(error) 
    }
}

exports.createPdf = async (req, res, next) => {
    try {
        const {firstName} = req.body;
        console.log(firstName)
        const user = await User.findOne({where: {firstName: firstName}});
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(`${user.lastName}.pdf`))
        doc
        .fontSize(25)
        .text(user.firstName, 100, 100);
        doc
        .fontSize(25)
        .text(user.lastName, 200, 100);
        doc.end()
        const content = fs.readFileSync('Gorin.pdf', 'binary')
        const update = await User.update({pdf: content}, {
            where: {
                firstName: user.firstName
            }
        })
        console.log(update)
        await res.status(200).json({
            message: "true"
        })

    } catch (error) {
        res.status(200).json({
            message: "false"
        })
    }
}