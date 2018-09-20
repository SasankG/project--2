module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  Users.associate = function(models) {
    Users.belongsToMany(models.Jobs, {
      through: "JobUsers",
      as: "jobs",
      foreignKey: "jobsId"
    });
  };
  return Users;
};
