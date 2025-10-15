/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `WorkoutLog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `WorkoutLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkoutLog" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutLog_title_key" ON "WorkoutLog"("title");
