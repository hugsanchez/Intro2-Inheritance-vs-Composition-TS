"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
//Tupple created here to define a type of what that array might contain instead of use of any
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5], row[6]
        ];
        //assertions override TS to consider the thing as one of the possible values
        //Type Assertion to tell TS to trust the developer
    }
}
exports.MatchReader = MatchReader;
