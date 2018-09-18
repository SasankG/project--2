module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    task: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  });
  Jobs.associate = function(data) {
    Jobs.belongsTo(data.Users, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Jobs;
};
