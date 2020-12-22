module.exports = (sequelize, DataTypes) => {
  return sequelize.define ('Group', {
    groupIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    groupName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    groupImage: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    groupCode: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    groupThumbnailImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
    }
  }, {
    tableName: 'GROUP_TB',
    timestamps: false
  })
}