import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatTabsModule, MatToolbarModule, MatIconModule,
  MatGridListModule, MatChipsModule, MatSidenavModule, MatListModule, MatTableModule, MatCellDef, MatCell
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
