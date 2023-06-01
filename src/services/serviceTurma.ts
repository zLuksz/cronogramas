import { AppDataSource } from "../databases/connections/data-source"
import Turma from "../databases/models/turma"

const cursor = AppDataSource.getRepository(Turma)

type newTurmaRequest = {
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: number
    fk_curso: string
}

export class CreateTurmaService {
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
}

export class ReadAllCursoService {}

export class ReadOneCursoService {}

export class UpdateCursoService {}

export class DeleteCursoService {}
