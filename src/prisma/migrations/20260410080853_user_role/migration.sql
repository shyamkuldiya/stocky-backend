/*
  Warnings:

  - Added the required column `role` to the `inventory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'STAFF');

-- AlterTable
ALTER TABLE "inventory" ADD COLUMN     "role" "UserRole" NOT NULL;
