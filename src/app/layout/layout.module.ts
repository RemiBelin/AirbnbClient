import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { 
  constructor( @Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error('LayoutModule has already been loaded. You should only import it in the AppModule only.');
    }
  }
}
