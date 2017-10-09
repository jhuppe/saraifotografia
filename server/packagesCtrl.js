module.exports = {
  getPackages: function (req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_packages([])
      .then(packages => { res.status(200).send(packages) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
}
