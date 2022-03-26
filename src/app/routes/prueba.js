const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM noticias', (err, result) => {
      res.render('news/news', {
        fors: result
      });
    });
  });

  app.get('/prueba', (req, res) => {
    connection.query('SELECT * FROM noticias', (err, result) => {
      res.render('news/news', {
        fors: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { title, news } = req.body;
    connection.query('INSERT INTO news SET ? ',
      {
        title,
        fors
      }
    , (err, result) => {
      res.redirect('/news');
    });
  });
};
