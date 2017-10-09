module.exports = {
  getPhotos: function (req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_photos([])
      .then(photos => { res.status(200).send(photos) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
}
