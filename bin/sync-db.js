const models = require('../models');

module.exports = () => {
  const options = {
    force: projcess.env.NODE_ENV === 'test' ? true : false,
  };
  return models.sequelize.sync(options);
}; // force : 기존의 DB를 날려버리고 새로 만들어주는 옵션
