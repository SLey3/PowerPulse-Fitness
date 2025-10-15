/*
  Warnings:

  - You are about to drop the column `weightPref` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "weightPref",
ADD COLUMN     "unitPref" TEXT NOT NULL DEFAULT 'kg';
