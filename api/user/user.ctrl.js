const models = require('../../models');

function index(req, res) {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  models.User.findAll({
    limit,
  }).then((users) => res.json(users));
}

function show(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  models.User.findOne({ where: { id } }).then((user) => {
    if (!user) return res.status(404).end();
    res.json(user);
  });
}

function destroy(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  models.User.destroy({
    where: { id },
  }).then(() => {
    res.status(204).end();
  });
}

function create(req, res) {
  const { name } = req.body;
  if (!name) return res.status(400).end();

  // if (users.some((user) => user.name === name)) return res.status(409).end();

  models.User.create({ name })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(409).end();
      }
      res.status(500).end();
    });
}

function update(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();

  models.User.findOne({ where: { id } }).then((user) => {
    if (!user) return res.status(404).end();

    user.name = name;
    user
      .save()
      .then((_) => res.json(user))
      .catch((err) => {
        if (err.name === 'SequelizeUniqueConstraintError') return res.status(409).end();

        res.status(500).end();
      });
  });
}

module.exports = {
  index,
  show,
  destroy,
  create,
  update,
};
