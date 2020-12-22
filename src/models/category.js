module.exports = (sequelize, DataTypes) => {
  return sequelize.define ('Category', {
    categoryIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
    tableName: 'CATEGORY_TB',
    timestamps: false
  })
}