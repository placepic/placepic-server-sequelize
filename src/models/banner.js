module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Banner', {
    bannerIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bannerTitle: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    bannerBadgeName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    bannerBadgeColor: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    bannerDescription: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    bannerCreatedAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bannerImageUrl: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'BANNER_TB',
    timestamps: false,
  })
}