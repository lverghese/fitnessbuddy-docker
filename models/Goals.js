


Goals.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     }, 
     user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      //
      goal: {
          type: DataTypes.STRING,
          allowNull: false,
          choices: {
              
          }
      }
    }
)