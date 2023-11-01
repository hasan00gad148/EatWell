
const {addResturants} = require('./routes/addResturants.js');

const path = require('path');
const {read, write} = require('./utils/files.js');

const express = require('express');


const app = express();
const port = 3000;


app.use('/public',express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use('/add', addResturants);
// app.use('/browes', browesResturants);



app.get('/', (req, res) => { 
  res.render('index');
  });

app.get('/home', (req, res) => { 
  res.render('index');
});



app.get('/add-resturant', (req, res) => { 
  res.render('addresturant');
});



app.get('/browes-resturant', (req, res) => { 
  resturants = read('./database/resturants.json');
  if (req.query.order==="yes")
    resturants.sort((a, b) => a.name.localeCompare(b.name))
  else
  resturants.sort((a, b) => b.name.localeCompare(a.name))


  res.render('browesresturant',{resturants:resturants});
});



app.get('/browes-resturant/:id', (req, res) => { 
  resturants = read('./database/resturants.json');
  console.log("resturant: ",resturants[0]);


  resturants.forEach(resturant => {
   
    if (resturant.id == req.params.id){
      console.log("resturant: ",resturant);
      res.render('resturant',{resturant:resturant});
    }
  });
  
});


app.get('/about', (req, res) => { 
  res.render('about');
});










app.use((req, res, next) => {
    res.status(404).send('Sorry, we cannot find that!');
  });

app.use((err,req, res, next) => {
    console.error(err)
    res.status(500 || err.status).send('Sorry, something went wrong');
  });


app.listen(port,(err, req, res)=>{
    if (err){
        console.error(err)
    }
    console.log("listenning on port " +port + "...")
})
