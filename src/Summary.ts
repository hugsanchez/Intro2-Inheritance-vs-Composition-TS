import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./ReportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report:string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary{
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }
  //static methods can be called off the class itself without instance needed
  //new instance used here not noted that instance created in index.ts

  constructor(  public analyzer: Analyzer, 
                public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);

    this.outputTarget.print(output);
  }
}

