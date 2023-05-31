const express = require('express');
const app = express();

app.use('/customers',require('./routes/R_customers'));
app.use('/products',require('./routes/R_products'));
app.use('/suppliers',require('./routes/R_suppliers'));



app.listen(3000);