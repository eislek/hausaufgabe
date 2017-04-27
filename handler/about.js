// handler/about.js

module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('about', {
        title: 'Hello Leute',
        greeting: `Hello Team4! Es ist ${new Date().toISOString()}`
    });
};