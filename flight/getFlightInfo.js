("use strict");
/*jshint esversion: 6 */
var fs = require("fs");
var request = require("request");
// request(
//     "https://book.cebupacificair.com/Flight/InternalSelect?o1=MNL&d1=USU&o2=USU&d2=MNL&dd1=2019-05-07&p=&ADT=1&CHD=0&INF=0&s=true&mon=true",
//     function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body); // 打印google首页
//         }
//     }
// );
request(
    "https://book.cebupacificair.com/Flight/InternalSelect?o1=MNL&d1=USU&o2=USU&d2=MNL&dd1=2019-05-07&p=&ADT=1&CHD=0&INF=0&s=true&mon=true"
).pipe(fs.createWriteStream("./text.txt"));
// var fs = require("fs");
// var http = require("http");
// const file_name = "fru_health_details_cma_view.json";

/**===================================== Get objects from file ==================================**/
// const fruList = JSON.parse(fs.readFileSync("./originData/" + file_name));

/**========================================= New Object Model ====================================**/

/**========================================= Process objects ====================================**/

/**========================================= Utils Function ====================================**/

function sortFn(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
}

// console.log(result);
/**===================================== Save objects as file ==================================**/

// fs.writeFile("./outputData/" + file_name, JSON.stringify(objects, null, 4), "utf8", function(err) {
//     if (err) return console.log(err);
// });
