CREATE TABLE Unidade (
	idUnidade VARCHAR PRIMARY KEY,
	descricaoUnidade VARCHAR NOT NULL,
	cargaHorariaUnidade INTEGER NOT NULL,
	ordem INTEGER NOT NULL,
	fkCurso VARCHAR REFERENCES Curso (idCurso)
);