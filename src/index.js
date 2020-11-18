const express = require('express');
const path = require('path');



const app=express();
app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});