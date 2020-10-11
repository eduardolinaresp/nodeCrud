"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
const connection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                reject(err);
        });
    });
    /*pool.getConnection()
        .then(connection => {
            pool.releaseConnection(connection);
            console.log('DB is Connected');
        });
    
        pool.getConnection((err, connection) => {
            if (err) throw err; connection.release();
            console.log('DB is connected');
       
       });
    
    
       pool.then((r: any) => r.getConnection().then((connection: any) => {
        pool.releaseConnection(connection);
        console.log("DB is connected");
      }));
         */
    pool.getConnection(function (err, connection) {
        if (err)
            throw err; // not connected!
        if (error)
            throw error;
        // Don't use the connection here, it has been returned to the pool.
    });
};
exports.default = pool;
