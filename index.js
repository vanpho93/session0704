const express = require('express');
const session = require('express-session');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(session({
    secret: 'sdfiheqfkskjdf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));

app.get('/muave', (req, res) => {
    req.session.daMuaVe = true;
    res.send('BAN DA MUA VE');
});

app.get('/vaorap', (req, res) => {
    if (req.session.daMuaVe === true) {
        req.session.num = Math.random()
        res.send('MOI BAN XEM PHIM');
    } else {
        res.send('MOI BAN MUA VE');
    }
});

app.get('/view', (req, res) => {
    if (req.session.view) {
        ++req.session.view;
    } else {
        req.session.view = 1;
    }
    res.send('' + req.session.view);
});
