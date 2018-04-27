import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  printInput1 = "Print Input 1";
  printInput2 = "Print Input 2";

  print(): void {
    let printContents, popupWin;
    // printContents = document.getElementById('print-this').innerHTML;
    printContents = `
        <h1>Print Document</h1>
        First Name: ${this.printInput1}<br><hr><br>Last Name: ${this.printInput2}`;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>PRINT</title>
          <link rel="stylesheet" href="app.component.css">
          <style>

          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );

    console.log(printContents);
    popupWin.document.close();
  }
}
