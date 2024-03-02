-- CreateTable
CREATE TABLE `Region` (
    `id_region` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_region`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_Region` (
    `id_sub_region` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `id_region` INTEGER NOT NULL,

    PRIMARY KEY (`id_sub_region`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Date_Format` (
    `id_date_format` INTEGER NOT NULL AUTO_INCREMENT,
    `format` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_date_format`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Currency` (
    `id_currency` INTEGER NOT NULL AUTO_INCREMENT,
    `abbr` VARCHAR(20) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `symbol` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_currency`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flag` (
    `id_flag` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(10) NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_flag`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coat_Of_Arms` (
    `id_coat_of_arms` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(10) NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_coat_of_arms`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id_country` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `official_name` VARCHAR(100) NOT NULL,
    `abbr` VARCHAR(5) NOT NULL,
    `internet_tld` VARCHAR(20) NOT NULL,
    `motto` VARCHAR(100) NULL,
    `anthem` VARCHAR(100) NULL,
    `capital` VARCHAR(100) NOT NULL,
    `official_language` VARCHAR(50) NOT NULL,
    `population` INTEGER NOT NULL,
    `iso_3166_1_alpha_2` VARCHAR(5) NULL,
    `iso_3166_1_alpha_3` VARCHAR(5) NULL,
    `calling_code` VARCHAR(10) NULL,
    `timezone` VARCHAR(20) NULL,
    `id_coat_of_arms` INTEGER NULL,
    `id_flag` INTEGER NULL,
    `id_currency` INTEGER NULL,
    `id_date_format` INTEGER NULL,
    `id_region` INTEGER NULL,
    `id_sub_region` INTEGER NULL,

    PRIMARY KEY (`id_country`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sub_Region` ADD CONSTRAINT `Sub_Region_id_region_fkey` FOREIGN KEY (`id_region`) REFERENCES `Region`(`id_region`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_coat_of_arms_fkey` FOREIGN KEY (`id_coat_of_arms`) REFERENCES `Coat_Of_Arms`(`id_coat_of_arms`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_flag_fkey` FOREIGN KEY (`id_flag`) REFERENCES `Flag`(`id_flag`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_currency_fkey` FOREIGN KEY (`id_currency`) REFERENCES `Currency`(`id_currency`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_date_format_fkey` FOREIGN KEY (`id_date_format`) REFERENCES `Date_Format`(`id_date_format`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_region_fkey` FOREIGN KEY (`id_region`) REFERENCES `Region`(`id_region`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Country` ADD CONSTRAINT `Country_id_sub_region_fkey` FOREIGN KEY (`id_sub_region`) REFERENCES `Sub_Region`(`id_sub_region`) ON DELETE SET NULL ON UPDATE CASCADE;
