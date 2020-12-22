module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Bookmark', {
    bookmarkIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }, {
    tableName: 'BOOKMARK_TB',
    timestamps: false,
  })
}