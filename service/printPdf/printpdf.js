// Import dependencies
const PDFDocument = require("pdfkit");
const promise=require('promise');
const fs=require('fs')
const moment=require('moment')

let EPC=(record,gender)=>{
    return new Promise((resolve, reject) => {
        
  // Create the PDF document
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});
const filename=`${'./docoument/Application/'+ record[0].id+'.pdf'}`
// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(filename));
// Draw the certificate image
// doc.image("templates/PMAS_00001.png", 0, 0, { width: 842 });
// head of letter
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(record[0].head, -380, 154, {
    align: "center"
});
// // Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), 550, 154, {
    align: "center"
});
// title of letter
doc.font('Helvetica-Bold').
fontSize(18).text(record[0].title, 133, 204, {
    align: "center"
});
doc.font('Helvetica').text("")
// Draw the 1st
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].first} ${gender.sex} ${record[0].name} ${record[0].second} ${record[0].reg_no} ${record[0].third} ${record[0].degree} ${record[0].fourth} ${gender.mr} ${record[0].fifth}`, 99, 267, {
    align: "left",  
})
// doc.moveDown()
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].sixth}`, 99, 350, {
    align: "left"
})
// authority , footer
doc.fontSize(17).text(record[0].Name,0,485,{
    align:"right"
}).fontSize(17).text(record[0].designation,200,505,{
align:"right"
})

resolve(filename)

// Finalize the PDF and end the stream
doc.end();

});
}


// new function start

let A=(record,gender)=>{
    return new Promise((resolve, reject) => {
        
  // Create the PDF document
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});
const filename=`${'./docoument/Application/'+ record[0].id+'.pdf'}`
// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(filename));
// Draw the certificate image
// doc.image("templates/PMAS_00001.png", 0, 0, { width: 842 });
// head of letter
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(record[0].head, -380, 254, {
    align: "center"
});
// // Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), 550, 254, {
    align: "center"
});
// title of letter
doc.font('Helvetica-Bold').
fontSize(18).text(record[0].title, 133, 304, {
    align: "center"
});
doc.font('Helvetica').text("")
// Draw the 1st
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].first} ${gender.sex} ${record[0].name} ${record[0].second} ${record[0].reg_no} ${record[0].third} ${record[0].degree} ${record[0].fourth} ${gender.mr} ${record[0].fifth}`, 99, 367, {
    align: "left",  
})
// doc.moveDown()
// doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].sixth}`, 99, 350, {
//     align: "left"
// })
// authority , footer
doc.fontSize(17).text(record[0].Name,0,485,{
    align:"right"
}).fontSize(17).text(record[0].designation,200,505,{
align:"right"
})

resolve(filename)

// Finalize the PDF and end the stream
doc.end();

});
}


// new function start

let B=(record,gender)=>{
    return new Promise((resolve, reject) => {
        
  // Create the PDF document
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});
const filename=`${'./docoument/Application/'+ record[0].id+'.pdf'}`
// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(filename));
// Draw the certificate image
// doc.image("templates/PMAS_00001.png", 0, 0, { width: 842 });
// head of letter
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(record[0].head, -380, 254, {
    align: "center"
});
// // Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), 550, 254, {
    align: "center"
});
// title of letter
doc.font('Helvetica-Bold').
fontSize(18).text(record[0].title, 133, 304, {
    align: "center"
});
doc.font('Helvetica').text("")
// Draw the 1st
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].first} ${gender.sex} ${record[0].name} ${record[0].second} ${record[0].reg_no} ${record[0].third} ${record[0].degree} ${record[0].fourth} ${gender.mr} ${record[0].fifth}`, 99, 367, {
    align: "left",  
})
// doc.moveDown()
// doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].sixth}`, 99, 350, {
//     align: "left"
// })
// authority , footer
doc.fontSize(17).text(record[0].Name,0,485,{
    align:"right"
}).fontSize(17).text(record[0].designation,200,505,{
align:"right"
})

resolve(filename)

// Finalize the PDF and end the stream
doc.end();

});
}




// new function start

let C=(record,gender)=>{
    return new Promise((resolve, reject) => {
        
  // Create the PDF document
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});
const filename=`${'./docoument/Application/'+ record[0].id+'.pdf'}`
// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(filename));
// Draw the certificate image
// doc.image("templates/PMAS_00001.png", 0, 0, { width: 842 });
// head of letter
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(record[0].head, -380, 254, {
    align: "center"
});
// // Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), 550, 254, {
    align: "center"
});
// title of letter
doc.font('Helvetica-Bold').
fontSize(18).text(record[0].title, 133, 304, {
    align: "center"
});
doc.font('Helvetica').text("")
// Draw the 1st
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].first} ${gender.sex} ${record[0].name} ${record[0].second} ${record[0].reg_no} ${record[0].third} ${record[0].degree} ${record[0].fourth} ${gender.mr} ${record[0].fifth} ${record[0].sixth}`, 99, 367, {
    align: "left",  
})
// doc.moveDown()
// doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].sixth}`, 99, 350, {
//     align: "left"
// })
// authority , footer
doc.fontSize(17).text(record[0].Name,0,485,{
    align:"right"
}).fontSize(17).text(record[0].designation,200,505,{
align:"right"
})

resolve(filename)

// Finalize the PDF and end the stream
doc.end();

});
}


// new function start

let D=(record,gender)=>{
    return new Promise((resolve, reject) => {
        
  // Create the PDF document
  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});
const filename=`${'./docoument/Application/'+ record[0].id+'.pdf'}`
// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(filename));
// Draw the certificate image
// doc.image("templates/PMAS_00001.png", 0, 0, { width: 842 });
// head of letter
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(record[0].head, -380, 254, {
    align: "center"
});
// // Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), 550, 254, {
    align: "center"
});
// title of letter
doc.font('Helvetica-Bold').
fontSize(18).text(record[0].title, 133, 304, {
    align: "center"
});
doc.font('Helvetica').text("")
// Draw the 1st
doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].first} ${gender.sex} ${record[0].name} ${record[0].second} ${record[0].reg_no} ${record[0].third} ${record[0].degree} ${record[0].fourth} ${gender.mr} ${record[0].fifth} ${record[0].sixth}${gender.mr}${record[0].seven} ${gender.h} ${record[0].semester} ${record[0].eight}`, 99, 367, {
    align: "left",  
})
// doc.moveDown()
// doc.font('./docoument/Inconsolata-VariableFont_wdth,wght.ttf').fontSize(17).text(`${record[0].sixth}`, 99, 350, {
//     align: "left"
// })
// authority , footer
doc.fontSize(17).text(record[0].Name,0,485,{
    align:"right"
}).fontSize(17).text(record[0].designation,200,505,{
align:"right"
})

resolve(filename)

// Finalize the PDF and end the stream
doc.end();

});
}

module.exports={
    EPC,A,B,C,D
}