/**
 * Tipo genérico de Base de datos.
 * @var DB
 * @version 1.0.0
 */
export type DB = {

    connection:string
    database: string
    host:string
    port: string
    _user:string
    _password:string
}


/**
 * Interface que servirá de modelo para implementar distintas configuraciones de Bases de datos
 * @version 1.0.0
 */
export interface DatabaseInterface<DB> {

    connection:string;
    database:string;
    port: string;
    _user:string;
    _password: string;

}

/**
 * Clase genérica para trabajar con base de datos
 * @version 1.0.0
 */
export class Database implements DatabaseInterface<DB>
{

    public connection:string
    public database:string
    public port: string
    _user:string
    _password: string

    constructor({connection, database, port, _user, _password}:DB)
    {
        this.connection = connection;
        this.database = database;
        this.port = port;
        this._user = _user;
        this._password = _password;
    }


}