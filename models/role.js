module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.TINYINT, defaultValue: 1 },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    tableName: 'roles',
    timestamps: true,
  });
  return Role;
};