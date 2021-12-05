import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  //implicitly saying it starts off as an array 

  constructor(public filename: string){
    //public automatically defining a property on our class as filename
    //whatever we stick in constructor gets assigned filename 
  }
  read(): void {
    this.data = fs.readFileSync(this.filename, {
        //can read any file and turn it into a string
      encoding: 'utf-8'
        //encoding tells it to return a string for us 
    })
    .split('\n') 
    .map((row: string): string[] => {
      return row.split(',');
    }
    )
  }
}