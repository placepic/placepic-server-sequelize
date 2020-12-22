module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Subway', {
    subwayIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subwayName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
    tableName: 'SUBWAY_TB',
    timestamps: false,
  })
}