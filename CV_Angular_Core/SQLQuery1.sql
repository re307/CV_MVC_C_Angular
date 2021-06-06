USE [CV]
GO
/****** Object:  Table [dbo].[Datos]    Script Date: 05/06/2021 09:23:28 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Datos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Gustos] [varchar](max) NULL,
	[Prioridad] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Datos] ON 
GO
INSERT [dbo].[Datos] ([Id], [Gustos], [Prioridad]) VALUES (1, N'Leer', 1)
GO
INSERT [dbo].[Datos] ([Id], [Gustos], [Prioridad]) VALUES (2, N'Cantar', 2)
GO
INSERT [dbo].[Datos] ([Id], [Gustos], [Prioridad]) VALUES (3, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Datos] OFF
GO
/****** Object:  StoredProcedure [dbo].[Admin]    Script Date: 05/06/2021 09:23:28 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Admin] 
	-- Add the parameters for the stored procedure here
	@Action varchar(max) = null
AS
BEGIN
	if @Action = 'dato'
	begin
		select * from Datos
	end
END
GO
