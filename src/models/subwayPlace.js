module.exports = (sequelize, DataTypes) => {
  return sequelize.define('SubwayPlace', {
    subwayPlaceIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }, {
    tableName: 'SUBWAY_PLACE_RELATION_TB',
    timestamps: false,
  })
}