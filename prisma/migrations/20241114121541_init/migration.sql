-- CreateTable
CREATE TABLE `Song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cim` VARCHAR(191) NOT NULL,
    `szerzo` VARCHAR(191) NOT NULL,
    `hossz` INTEGER NOT NULL,
    `ar` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
