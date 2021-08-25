const uuid = require('uuid');
const path = require('path');

module.exports.addImage = (req, res) => {
  const { files } = req;
  const { img } = files;

  if (files.hasOwnProperty('img') && img) {
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, '../../../..', 'Save-Images', fileName));

    res.send('The image has been saved!');
  } else {
    res.status(422).send('Invalid data entered!');
  }
};