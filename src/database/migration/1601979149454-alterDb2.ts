import {MigrationInterface, QueryRunner} from "typeorm";

export class alterDb21601979149454 implements MigrationInterface {
    name = 'alterDb21601979149454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc')`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc')`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc')`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
