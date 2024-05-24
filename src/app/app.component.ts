import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from "./components/welcome/welcome.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterOutlet,
        FormsModule,
        CommonModule,
        ProductsComponent,
        ImgComponent,
        NavComponent,
        WelcomeComponent
    ]
})
export class AppComponent {
  public imgParent: string = '';
  public showImage: boolean = true;    
}
