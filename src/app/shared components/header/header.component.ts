import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private router: Router){
    if (document.getElementById('base-theme-style-css') !=null) {
      document.getElementById('base-theme-style-css')!.remove();
  }
  console.log("sign up4")
  const node2 = document.createElement('link');
      node2.rel = 'stylesheet';
      node2.href = 'assets/css/custom.css';
      node2.id = 'base-custom-style-css';
      document.getElementsByTagName('head')[0].appendChild(node2);

      
  const node = document.createElement('link');
  node.rel = 'stylesheet';
  node.href = 'assets/css/theme.css';
  node.id = 'base-theme-style-css';
  document.getElementsByTagName('head')[0].appendChild(node);


    // this.router.events.subscribe(event => {
    //   console.log("sign up2",event)
    //   if (event) {
    //     console.log("sign up3")
    //       if (document.getElementById('base-theme-style-css') !=null) {
    //           document.getElementById('base-theme-style-css')!.remove();
    //       }
    //       console.log("sign up4")
    //       const node = document.createElement('link');
    //       node.rel = 'stylesheet';
    //       node.href = 'assets/css/theme.css';
    //       node.id = 'base-theme-style-css';
    //       document.getElementsByTagName('head')[0].appendChild(node);

    //       // const node2 = document.createElement('link');
    //       // node2.rel = 'stylesheet';
    //       // node2.href = 'assets/css/custom.css';
    //       // node2.id = 'base-custom-style-css';
    //       // document.getElementsByTagName('head')[1].appendChild(node2);

    //       // if (document.getElementById('custom_js') !=null) {
    //       //     document.getElementById('custom_js')!.remove();
    //       // }
    //       // const style = document.createElement('script');
    //       // style.type = 'text/javascript';
    //       // style.src = 'assets/js/custom.js';
    //       // style.id = 'custom_js';
    //       // style.async = false;
    //       // style.charset = 'utf-8';
    //       // document.getElementsByTagName('head')[0].appendChild(style);
    //   }
  // });
  }

  ngOnInit(): void {
  //   console.log("sign up")
  //   this.router.events.subscribe(event => {
  //     console.log("sign up2",event)
  //     if (event) {
  //       console.log("sign up3")
  //         if (document.getElementById('base-theme-style-css') !=null) {
  //             document.getElementById('base-theme-style-css')!.remove();
  //         }
  //         console.log("sign up4")
  //         const node = document.createElement('link');
  //         node.rel = 'stylesheet';
  //         node.href = 'assets/css/theme.css';
  //         node.id = 'base-theme-style-css';
  //         document.getElementsByTagName('head')[0].appendChild(node);

  //         // const node2 = document.createElement('link');
  //         // node2.rel = 'stylesheet';
  //         // node2.href = 'assets/css/custom.css';
  //         // node2.id = 'base-custom-style-css';
  //         // document.getElementsByTagName('head')[1].appendChild(node2);

  //         // if (document.getElementById('custom_js') !=null) {
  //         //     document.getElementById('custom_js')!.remove();
  //         // }
  //         // const style = document.createElement('script');
  //         // style.type = 'text/javascript';
  //         // style.src = 'assets/js/custom.js';
  //         // style.id = 'custom_js';
  //         // style.async = false;
  //         // style.charset = 'utf-8';
  //         // document.getElementsByTagName('head')[0].appendChild(style);
  //     }
  // });
}
}
