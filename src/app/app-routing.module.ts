import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotlightComponent } from './spotlight/spotlight.component';

const routes: Routes = [
  { path: '', component: SpotlightComponent },
  // TODO create a NotFoundComponent
  { path: '**', component: SpotlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
