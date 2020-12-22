module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Comment', {
    commentIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    commentContent: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    commentCreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.NOW,
    },
    commentUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.NOW,
    }
  }, {
    tableName: 'COMMENT_TB',
    timestamps: false,
  })
}