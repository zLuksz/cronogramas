create table Turma (
	idTurma varchar primary key,
	dataInicio date not null,
	horasAulaDia int,
	fkCurso varchar references Curso(idCurso)
);