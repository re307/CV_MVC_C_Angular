USE [CV]
GO
/****** Object:  StoredProcedure [dbo].[Admin]    Script Date: 05/06/2021 10:58:40 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[Admin] 
	-- Add the parameters for the stored procedure here
	@Action varchar(max) = null
	--Variables de administracion acciones grid
	,@Id int = null
	,@Propiedad int = null
	,@Gustos varchar(max) = null
AS
BEGIN
	if @Action = 'data'
	begin
		select * from Datos
	end
	if @Action = 'Update'
	begin
		if @Propiedad = 1
		begin
			update a
				set
					a.Gustos = @Gustos
			from Datos a
			where 1 = 1
				and a.Id = @Id
		end
	end
END
