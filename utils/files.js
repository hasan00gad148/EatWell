const fs = require('fs');


function read(filename) {
    try {
        data = fs.readFileSync(filename); 
        resturants = JSON.parse(data); 
    } catch (error) {
        console.log("couldn't read file :"),(error);
    }


    return resturants
}



function write(filename, resturants) {

    try {
    data = JSON.stringify(resturants); 
    fs.writeFileSync(filename, data); 
    } catch (error) {
        console.log("couldn't read file :"),(error);
    }

}




module.exports = {read: read, write: write}


