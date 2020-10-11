import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

const connection = () => {
    return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
    }
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

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
      });
    });      

export default pool;