const { Group, User, Category } = require('./index');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define ('Place', {
    placeIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    placeName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    placeAddress: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    placeRoadAddress : {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    placeMapX: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeMapY: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeCreatedAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeUpdatedAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeReview: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    placeViews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'PLACE_TB',
    timestamps: false
  })
}