import { MysqlConnectionOptions } from "../driver/mysql/MysqlConnectionOptions"
import { PostgresConnectionOptions } from "../driver/postgres/PostgresConnectionOptions"
import { SqliteConnectionOptions } from "../driver/sqlite/SqliteConnectionOptions"

/**
 * DataSourceOptions is an interface with settings and options for specific DataSource.
 */
export type DataSourceOptions =
    | MysqlConnectionOptions
    | PostgresConnectionOptions
    | SqliteConnectionOptions
