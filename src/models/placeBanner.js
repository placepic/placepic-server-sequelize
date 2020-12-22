module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PlaceBanner', {
    placeBannerIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    tableName: 'PLACE_BANNER_RELATION_TB',
    timestamps: false,
  })
}