"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    //implicitly saying it starts off as an array 
    constructor(filename) {
        this.filename = filename;
        this.data = [];
        //public automatically defining a property on our class as filename
        //whatever we stick in constructor gets assigned filename 
    }
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            //can read any file and turn it into a string
            encoding: 'utf-8'
            //encoding tells it to return a string for us 
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
