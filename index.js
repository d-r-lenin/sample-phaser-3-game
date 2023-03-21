//create express app with public folder exposed and json body parser in port process.env.PORT or 3000
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port '+ (process.env.PORT || 3000));
});
