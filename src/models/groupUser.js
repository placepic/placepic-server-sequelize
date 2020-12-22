module.exports = (sequelize, DataTypes) => {
  return sequelize.define('GroupUser', {
    groupUserIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    part: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    profileImageUrl: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    tableName: 'GROUP_USER_RELATION_TB',
    timestamps: false,
  })
}