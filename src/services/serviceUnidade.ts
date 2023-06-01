import { AppDataSource } from "../databases/connections/data-source";
import Unidade from "../databases/models/unidade";


const cursor = AppDataSource.getRepository(Unidade)

type newUnidadeRequest = {
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
    fk_curso: string
}

type findOneUnidadeRequest = {
    id_unidade: string
}

export class CreateUnidadeService {
    async execute({
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
    }: newUnidadeRequest): Promise <Unidade | Error> {
        if (await cursor.findOne({where : {descricao_unidade}})) {
            return new Error("Descrição Unidade Já Cadastrada!")
        }
        
        const unidade = cursor.create({
            descricao_unidade,
            carga_horaria_unidade,
            ordem,
            fk_curso,
        })

        await cursor.save(unidade)

        return unidade
    }
}

export class ReadAllUnidadeService {
    async execute() {
        const unidade = await cursor.find()
        return unidade
    }
}

export class ReadOneUnidadeService {
    async excute({ id_unidade}: findOneUnidadeRequest) {
        const unidade = await cursor.findOne({where : {id_unidade}})

        if (!unidade) {
            return new Error("Unidade Não Encontrada!")
        }

        return unidade
    }
}

export class UpdateUnidadeService {}

export class DeleteUnidadeService {
    async execute({ id_unidade }: findOneUnidadeRequest) {
        const unidade = await cursor.findOne({ where : {id_unidade}})

        if (!unidade) {
            return new Error("Unidade Não Encontrada!")
        }

        await cursor.delete(unidade)
        
        return unidade
    }
}
