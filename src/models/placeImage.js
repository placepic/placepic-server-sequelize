module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PlaceImage', {
    placeImageIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    placeImageIdx: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    tableName: 'PLACE_IMAGE_TB',
    timestamps: false,
  })
}