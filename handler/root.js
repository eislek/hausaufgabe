// handler/root.js

module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'Hello Universe',
        greeting: `Hello Eda!!!! Es ist ${new Date().toISOString()}`,
        link1: `/`,
        link2: `/about`,
        link3: `/tweets`
    });
};