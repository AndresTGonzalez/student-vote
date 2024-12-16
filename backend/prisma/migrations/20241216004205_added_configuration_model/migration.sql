-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "isFirstTime" BOOLEAN NOT NULL DEFAULT true,
    "period" TEXT NOT NULL,
    "votationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "votationStart" TIMESTAMP(3) NOT NULL,
    "votationEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);
