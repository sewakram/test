const db = require('../util/database');

module.exports = class Moment {
  constructor(title, image, tags) {
    this.title = title;
    this.image = image;
    this.tags = tags;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM moments');
  }

  static save(moment) {
    return db.execute(
      'INSERT INTO moments (id,title, image, tags) VALUES (?,?, ?, ?)',
      ['',moment.title, moment.image, moment.tags]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM moments WHERE id = ?', [id]);
  }
};
