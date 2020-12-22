module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PlaceTag', {
    placeTagIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }, {
    tableName: 'PLACE_TAG_RELATION_TB',
    timestamps: false,
  })
}