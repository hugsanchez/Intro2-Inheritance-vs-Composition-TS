import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string ];
 //Tupple created here to define a type of what that array might contain instead of use of any

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [ 
        dateStringToDate(row[0]), 
        row[1], 
        row[2], 
        parseInt(row[3]), 
        parseInt(row[4]), 
        row[5] as MatchResult, row[6]];
        //assertions override TS to consider the thing as one of the possible values
        //Type Assertion to tell TS to trust the developer
  }
}