var express = require('express');
var app = express();
const product = require('./router/product')
const order = require('./router/order')
const user = require('./router/user')
const cors = require('cors')
app.use(express.json())
app.use(cors())//מאפשר גישה מצד לקוח לשרת הנוכחי
app.listen(4000, function () {
    console.log('express app on port 4000')
})

app.get('/', function (req, res) {
    res.send('hellow wrold')
});

app.use('/product', product);
app.use('/order', order);
app.use('/user', user);

app.use((req, res, next) => {
    res.send("404 not found function")
});
