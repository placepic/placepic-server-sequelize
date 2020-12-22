module.exports = (sequelize, DataTypes) => {
  return sequelize.define('SubwayLine', {
    subwayLineIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subwayLine: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subwayLineName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
    tableName: 'SUBWAY_LINE_TB',
    timestamps: false,
  })
}