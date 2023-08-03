import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'vanya';


  ngOnInit(): void {
// this.getCssJS()

  }
  getCssJS() {
    let styles = [
      'assets/css/classic-themes.min.css',
      'assets/css/custom.css',
      'assets/css/style.min.css',
      'assets/css/theme.css',
    ];

    for (let i = 0; i < styles.length; i++) {
      let style = document.createElement('link');
      (style.rel = 'stylesheet'),
      (style.href = styles[i]);
      document.head.appendChild(style);
    }

    let scripts = [
      'assets/js/app.js',
      'assets/js/custom.js',
      'assets/js/jquery-migrate.min.js',
      'assets/js/jquery.min.js',
    ];

    for (let i = 0; i < scripts.length; i++) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scripts[i];
      document.head.appendChild(script);
    }
  }
}
