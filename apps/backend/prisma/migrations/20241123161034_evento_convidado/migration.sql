-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "imagemBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Convidado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL,
    "possuiAcompanhantes" BOOLEAN NOT NULL,
    "qtdeAcompanhantes" INTEGER NOT NULL,
    "eventoId" TEXT,
    CONSTRAINT "Convidado_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Eventos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
