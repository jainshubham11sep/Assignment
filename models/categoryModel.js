module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("categories", {
        cat_id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    Category.associate = (models) => {
        Category.hasMany(models.sub_categories, {
            foreignKey: 'cat_id', targetKey: 'cat_id'
        });
    };

    return Category
}