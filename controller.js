const postFile = (req, res) => {
  const { file } = req;
  const { originalname, mimetype, size } = file;

  res.json({
    name: originalname,
    type: mimetype,
    size,
  });
};

module.exports = postFile;
