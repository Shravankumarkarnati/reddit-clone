import {MigrationInterface, QueryRunner} from "typeorm";

export class databaseCreate1600653555862 implements MigrationInterface {
    name = 'databaseCreate1600653555862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_owner_id"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_0e9a401575a3ded992a18eb0807"`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "postOwnerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_0e9a401575a3ded992a18eb0807" FOREIGN KEY ("postOwnerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_0e9a401575a3ded992a18eb0807"`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "postOwnerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_0e9a401575a3ded992a18eb0807" FOREIGN KEY ("postOwnerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD "post_owner_id" integer NOT NULL`);
    }

}
