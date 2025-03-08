import { Routes } from '@angular/router';
import {CalculatorComponent} from '../calculator/components/calculator/calculator.component';

export const routes: Routes = [

  // Base Path redirects to /calculator for now. This can be changed in the Future.
  {
    path: '',
    redirectTo: '/calculator',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];
