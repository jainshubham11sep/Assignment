module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }
        , {
            // timestamps: false
            updatedAt:false
        })

    return User;
}