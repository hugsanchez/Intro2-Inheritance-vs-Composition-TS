"use strict";
/*Refactor 1 with Generics and Abstract Class */
// import { MatchResult } from "./MatchResult";
// import { MatchReader } from "./MatchReader";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summaryCsv = Summary_1.Summary.winsAnalysisWithHtmlReport('Arsenal');
summaryCsv.buildAndPrintReport(matchReader.matches);
// const summary = Summary.winsAnalysisWithHtmlReport('Fulham');
// summary.buildAndPrintReport(matchReader.matches);
