/*Refactor 1 with Generics and Abstract Class */
// import { MatchResult } from "./MatchResult";
// import { MatchReader } from "./MatchReader";

// const reader = new MatchReader('football.csv');
// reader.read();

/* Refactor 2 with interface */
import { CsvFileReader } from './CsvFileReader';
import {MatchReader} from './MatchReader';

//Create an object that satisfies the 'Data Reader' interface
///const csvFileReader = new CsvFileReader('football.csv');


//Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
/// const matchReader = new MatchReader(csvFileReader);
/// matchReader.load();

//reference matchReader.matches

/*Composition for Analysis and Print */




import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { Summary } from './Summary';
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summaryCsv = Summary.winsAnalysisWithHtmlReport('Arsenal');
summaryCsv.buildAndPrintReport(matchReader.matches);



// const summary = Summary.winsAnalysisWithHtmlReport('Fulham');

// summary.buildAndPrintReport(matchReader.matches);




