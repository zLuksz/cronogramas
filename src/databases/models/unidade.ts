import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('unidade')
export default class Unidade {
    //Chave Primaria
    @PrimaryColumn()
    id_unidade: string

    //Chave Estrangeira
    @Column()
    fk_curso: string

    //Atributos
    @Column({nullable: true})
    descricao_unidade: string

    @Column({nullable: true})
    carga_horaria_unidade: number

    @Column({nullable: true})
    ordem: number

    constructor() {
        this.id_unidade = uuid()
    }
}