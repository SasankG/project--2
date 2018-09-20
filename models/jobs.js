module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: DataTypes.STRING,
    task: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    address: DataTypes.STRING
  });
  Jobs.associate = function(models) {
    Jobs.belongsToMany(models.Users, {
      through: "JobUsers",
      as: "users",
      foreignKey: "userId"
    });
  };
  return Jobs;
};
