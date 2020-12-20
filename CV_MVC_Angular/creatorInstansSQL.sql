create table Maestro_Aficiones (
	Id  int identity(1,1) primary key
	,Nombre varchar(max)
	,Prioridad int
)

insert Maestro_Aficiones (
	Nombre
	,Prioridad
) values(
	'Ver Fut'
	,1
),(
	'Leer'
	,2
)

select * from Maestro_Aficiones