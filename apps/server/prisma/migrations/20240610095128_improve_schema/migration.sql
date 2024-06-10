/*
  Warnings:

  - You are about to drop the column `phoneNo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `upiId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PricingModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `api_key` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'ONGOING', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'ONGOING', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_winnerUserId_fkey";

-- DropForeignKey
ALTER TABLE "PricingModel" DROP CONSTRAINT "PricingModel_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_walletId_fkey";

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- DropIndex
DROP INDEX "User_phoneNo_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phoneNo",
DROP COLUMN "type",
DROP COLUMN "upiId",
DROP COLUMN "username",
ADD COLUMN     "api_key" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Match";

-- DropTable
DROP TABLE "PricingModel";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "Wallet";

-- DropEnum
DROP TYPE "ParticipationStatus";

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "TransactionStatus";

-- DropEnum
DROP TYPE "TransactionType";

-- DropEnum
DROP TYPE "UserType";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "project_name" TEXT NOT NULL,
    "git_url" TEXT NOT NULL,
    "local_url" TEXT,
    "progress" INTEGER NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "completion_time" TEXT NOT NULL,
    "time_done" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL,
    "projectId" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
