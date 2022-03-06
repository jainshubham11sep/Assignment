module.exports = (sequelize, DataTypes) => {

    const sub_category = sequelize.define("sub_categories", {
        sub_cat_id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sub_cat_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // timestamps: false
        updatedAt:false
    })

    return sub_category;
}
