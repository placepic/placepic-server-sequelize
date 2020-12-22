const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Group = require('./group')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);
db.Place = require('./place')(sequelize, Sequelize);
db.Tag = require('./tag')(sequelize, Sequelize);
db.PlaceTag = require('./placeTag')(sequelize, Sequelize);
db.PlaceImage = require('./placeImage')(sequelize, Sequelize);
db.Subway = require('./subway')(sequelize, Sequelize);
db.SubwayPlace = require('./subwayPlace')(sequelize, Sequelize);
db.SubwayLine = require('./subwayLine')(sequelize, Sequelize);
db.Like = require('./like')(sequelize, Sequelize);
db.Bookmark = require('./bookmark')(sequelize, Sequelize);
db.GroupUser = require('./groupUser')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Banner = require('./banner')(sequelize, Sequelize);
db.PlaceBanner = require('./placeBanner')(sequelize, Sequelize);

/** 1 : N   Category : Place */
db.Category.hasMany(db.Place, { onDelete: 'cascade', foreignKey: 'categoryIdx', sourceKey: 'categoryIdx', allowNull: false })
db.Place.belongsTo(db.Category, {foreignKey: 'categoryIdx', targetKey: 'categoryIdx'});

/** 1 : N User: Place */
db.User.hasMany(db.Place, { onDelete: 'cascade', foreignKey: 'userIdx', sourceKey: 'userIdx' });
db.Place.belongsTo(db.User, { foreignKey: 'userIdx', targetKey: 'userIdx' });

/** 1: N Group: Place */
db.Group.hasMany(db.Place, { onDelete: 'cascade', foreignKey: 'groupIdx', sourceKey: 'groupIdx' });
db.Place.belongsTo(db.Group, { foreignKey: 'groupIdx', targetKey: 'groupIdx'});

/** M : N Tag: Place */
db.Tag.belongsToMany(db.Place, { through: 'PlaceTag', foreignKey: 'tagIdx' });
db.Place.belongsToMany(db.Tag, { through: 'PlaceTag', foreignKey: 'placeIdx' });

/** 1: N Category : Tag */
db.Category.hasMany(db.Tag, { onDelete: 'cascade', foreignKey: 'categoryIdx', sourceKey: 'categoryIdx' });
db.Tag.belongsTo(db.Category, { foreignKey: 'categoryIdx', targetKey: 'categoryIdx' });

/** 1 : N Place: PlaceImage */
db.Place.hasMany(db.PlaceImage, { onDelete: 'cascade', foreignKey: 'placeIdx', sourceKey: 'placeIdx' });
db.PlaceImage.belongsTo(db.Place, { foreignKey: 'placeIdx', targetKey: 'placeIdx' });

/** M : N Place: Subway */
db.Place.belongsToMany(db.Subway, { through:'SubwayPlace', foreignKey: 'placeIdx'});
db.Subway.belongsToMany(db.Place, { through:'SubwayPlace', foreignKey: 'subwayIdx'});

/** 1 : N Subway : SubwayLine */
db.Subway.hasMany(db.SubwayLine, { onDelete: 'cascade', foreignKey: 'subwayIdx', sourceKey: 'subwayIdx' });
db.SubwayLine.belongsTo(db.Subway, { onDelete: 'cascade', foreignKey: 'subwayIdx', targetKey: 'subwayIdx' });

/** M: N User : Place => LIKE */
db.User.belongsToMany(db.Place, { through: 'Like', as: 'Liker', foreignKey: 'userIdx' });
db.Place.belongsToMany(db.User, { through: 'Like', as: 'Liked', foreignKey: 'placeIdx' });

/** M: N User : Place => Bookmark */
db.User.belongsToMany(db.Place, { through: 'Bookmark', as: 'Bookmarker', foreignKey: 'userIdx' });
db.Place.belongsToMany(db.User, { through: 'Bookmark', as: 'Bookmarked', foreignKey: 'placeIdx' });

/** M : N User : Group => GroupUser */
db.User.belongsToMany(db.Group, { through: 'GroupUser', foreignKey: 'userIdx' });
db.Group.belongsToMany(db.User, { through: 'GroupUser', foreignKey: 'groupIdx' });

/** M : N User : Place => Comment */
db.User.belongsToMany(db.Place, { through: 'Comment', as: 'Commenter', foreignKey: 'userIdx' });
db.Place.belongsToMany(db.User, { through: 'Comment', as: 'Commented', foreignKey: 'placeIdx' });

/** 1 : N  Group : Banner */
db.Group.hasMany(db.Banner, { onDelete: 'cascade', foreignKey: 'groupIdx', sourceKey: 'groupIdx' });
db.Banner.belongsTo(db.Group, { onDelete: 'cascade', foreignKey: 'groupIdx', targetKey: 'groupIdx' });

/** N : M Banner : Place */
db.Place.belongsToMany(db.Banner, { through: 'PlaceBanner', foreignKey: 'placeIdx' });
db.Banner.belongsToMany(db.Place, { through: 'PlaceBanner', foreignKey: 'bannerIdx' });


module.exports = db;
