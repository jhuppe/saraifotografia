module.exports = {

  updatePackage: function (req, res) {
    const dbInstance = req.app.get('db');
    console.log('this is req.body', req.body)

    dbInstance.update_package([req.body.id, req.body.name, req.body.description, req.body.price])
      .then(() => res.send(req.body))
      .catch((error) => res.send(error))
  },

  addPhoto: function (req, res) {
    const dbInstance = req.app.get('db');
    console.log('this is req.body', req.body)

    dbInstance.add_photo([req.body.img_url, req.body.tag, req.body.description])
      .then((response) => {
        res.send('ok')
      })
      .catch((error) => {
        console.log('error from db', error)
      })
  }
}
