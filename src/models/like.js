module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Like', {
    likeIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    likeCreatedAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'LIKE_TB',
    timestamps: false,
  })
}