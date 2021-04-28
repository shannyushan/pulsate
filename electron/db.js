const { exception } = require("console");
const fs = require("fs");
var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const getMusic = require("./lib");

const DB = path.join(__dirname, "../dist/store/pulsate.db");
let db = new sqlite3.Database(
  DB,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.log(err.message);
      throw err;
    } else {
      console.log("Database Connected");
      const DDL_1 = `CREATE TABLE songs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            singer TEXT,
            album TEXT,
            src TEXT UNIQUE
            )`;
      db.run(DDL_1, (err) => {
        if (err) {
          console.log("table exist");
        }
        // else {
        //   let resp = getMusic();
        //   const Musics = resp[0],
        //     Albums = resp[1];
        //   for (var key in Musics) {
        //     try {
        //       db.run(
        //         `INSERT INTO songs(name,src) VALUES(?,?)`,
        //         [key, Musics[key]],
        //         function (err) {
        //           if (err) {
        //             return console.log(err.message);
        //           }
        //         }
        //       );
        //     } catch (err) {
        //       console.log(err);
        //     }
        //   }
        // }
      });
    }
  }
);

db.query = function (sql, params) {
  var that = this;
  return new Promise(function (resolve, reject) {
    that.all(sql, params, function (error, rows) {
      if (error) reject(error);
      else resolve({ rows: rows });
    });
  });
};

const getSongs = async () => {
  const result = await db.query("SELECT * FROM songs", []);
  return result;
};
// const getSRC = (id) => {
//   try {
//     db.run(`SELECT src FROM songs`, [id], (err, row) => {
//       if (err) {
//         const msg = {
//           success: false,
//           response: `error occured while fetching ${id} ${err.message}`,
//         };
//         return msg;
//       }
//       if (row) {
//         const msg = {
//           success: true,
//           response: row.src,
//         };
//         return msg;
//       } else {
//         const msg = {
//           success: false,
//           response: `No songs Found by the ${id}`,
//         };
//         return msg;
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     const msg = {
//       success: false,
//       response: `db error cannot fetch the specified id ${id}`,
//     };
//     return msg;
//   }
// };

module.exports = {
  db,
  getSongs,
};
