module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    userIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    salt: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(45)
    },
    userCreatedAt: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    certificationNumber: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
    tableName: 'USER_TB',
    timestamps: false,
  })
}