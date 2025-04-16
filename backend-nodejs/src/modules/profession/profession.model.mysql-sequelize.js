import { DataTypes } from 'sequelize';
import sequelize from '../../core/database/clients/mysql/sequelize.client.js';

const Profession = sequelize.define('Profession', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'profession',
  timestamps: false,
});

export default Profession;
