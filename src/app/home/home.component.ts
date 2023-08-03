import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){
    localStorage.setItem('user',"faraz")
  }
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
