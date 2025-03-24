import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SmallCardComponent} from './components/small-card/small-card.component';
import {MenuTitleComponent} from './components/menu-title/menu-title.component';
import {BigCardComponent} from './components/big-card/big-card.component';
import {HomeComponent} from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTitleComponent, BigCardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
