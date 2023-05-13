import { DataSource } from "typeorm";
import { Bootstrap } from "./bootstrap.interface";
import { Parameters } from "../helpers/Parameters";
import logger from "../helpers/Logger";

export default class DatabaseBootstrap implements Bootstrap{
    private static appDataSource: DataSource;

    initialize(): Promise<boolean | DataSource> {
        const dbConfig = Parameters.DB_CONFIG;
        console.log("Database config: ", dbConfig)

        const AppDataSource = new DataSource({
            type: "mysql",
            ...dbConfig,
        });

        DatabaseBootstrap.appDataSource = AppDataSource;

        return AppDataSource.initialize();
    }

    close(): void {
        DatabaseBootstrap.appDataSource?.destroy();
    }

    static get dataSource(): DataSource {
        return DatabaseBootstrap.appDataSource;
    }
}