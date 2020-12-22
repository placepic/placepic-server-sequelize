module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Tag', {
    tagIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tagName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    tagIsBasic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'TAG_TB',
    timestamps: false,
  })
}