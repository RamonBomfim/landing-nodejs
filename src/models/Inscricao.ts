import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface InscricaoInstance extends Model {
    id: number;
    name: string;
    email: string;
    whatsapp: string;
}

export const Inscricao = sequelize.define<InscricaoInstance>("Inscricao", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    whatsapp: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'inscricoes',
    timestamps: false
});