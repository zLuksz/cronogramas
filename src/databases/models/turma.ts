import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("turma")
export default class turma {
    //Chave Primaria
    @PrimaryColumn()
    id_turma: string
    //chave estrangeira
    @Column()
    fk_curso: string
    // Atributos
    @Column({ nullable: true})
    data_inicio: Date
    @Column({ nullable: true})
    data_fim: Date
    @Column({ nullable: true})
    horas_aula_dia: Number

    constructor() {
        this.id_turma = uuid()
    }
}


/*TABLE "turma" (
    "id_turma" varchar PRIMARY KEY,
    "data_inicio" date NOT NULL,
    "data_fim" date,
    "horas_aula_dia" integer NOT NULL DEFAULT 10,
    "fk_curso" varchar
);*/