import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule, MAT_DATE_LOCALE, MatSnackBarModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashBoardReducer } from './store/reducers/dashboard.reducers';
import { LoaginReducer } from './store/reducers/login.reducers';
import { RegistrationReducer } from './store/reducers/registration.reducers';
import { DashBoardEffects } from './store/effects/dashboard.effects';
import { LoginEffects } from './store/effects/login.effects';
import { Registrationffects } from './store/effects/registration.effect';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    StoreModule.forRoot(
      {
        dashboard: DashBoardReducer,
        login: LoaginReducer,
        registration: RegistrationReducer
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      DashBoardEffects,
      LoginEffects,
      Registrationffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
