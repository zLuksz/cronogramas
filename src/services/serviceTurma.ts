import { AppDataSource } from "../databases/connections/data-source"
import Turma from "../databases/models/turma"
import Unidade from "../databases/models/unidade"


const cursor = AppDataSource.getRepository(Turma)

type newTurmaRequest = {
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: number
    fk_curso: string
}

type updateTurmaRequest = {
    id_turma: string
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: number
    fk_curso: string
}

type findOneTurmaRequest = {
    id_turma: string
}

export class TurmaService {
    async execute({
        data_inicio,
        data_fim,
        horas_aula_dia,
        fk_curso,
    }: newTurmaRequest): Promise <Turma | Error> {
        if (await cursor.findOne({where : {fk_curso, data_inicio}})) {
            return new Error("Turma Em Conflito Com Outra!")
        }

        const turma = cursor.create({
            data_inicio,
            data_fim,
            horas_aula_dia,
            fk_curso,
        })

        await cursor.save(turma)

        return turma
    }
    
    async readAll() {
        const turma = await cursor.find()
        return turma
    }
}



export class ReadOneTurmaService {
    async execute({ id_turma }: findOneTurmaRequest) {
        const turma = await cursor.findOne({ where : {id_turma}})

        if (!turma) {
            return new Error("Turma Não Encontrada!")
        }

        return turma
    }
}

export class UpdateTurmaService {}

export class DeleteTurmaService {
    async execute({ id_turma }: findOneTurmaRequest) {
        const turma = await cursor.findOne({ where : {id_turma}})

        if (!turma) {
            return new Error("Turma Não Encontrada!")
        }

        await cursor.delete(turma.id_turma)

        return turma
    }
}
