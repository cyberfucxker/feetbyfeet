module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    roleId: { type: DataTypes.INTEGER, references: { model: 'roles', key: 'id' }, allowNull: false },
    fname: { type: DataTypes.STRING, defaultValue: null },
    lname: { type: DataTypes.STRING, defaultValue: null },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    countryCode: { type: DataTypes.STRING, defaultValue: null },
    mobile: { type: DataTypes.STRING, defaultValue: null },
    mobileWithCountry: { type: DataTypes.STRING, defaultValue: null },
    password: { type: DataTypes.STRING, defaultValue: null },
    country: { type: DataTypes.STRING, defaultValue: null },
    state: { type: DataTypes.STRING, defaultValue: null },
    city: { type: DataTypes.STRING, defaultValue: null },
    zipcode: { type: DataTypes.STRING, defaultValue: null },
    verifiedAt: { type: DataTypes.DATE, defaultValue: null },
    status: { type: DataTypes.TINYINT, defaultValue: 1 },
    deletedAt: { type: DataTypes.DATE, defaultValue: null }
  }, {
    tableName: 'users',
    timestamps: true,
    paranoid: true, // enables soft deletes
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  });
  return User;
};