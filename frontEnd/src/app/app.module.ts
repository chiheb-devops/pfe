import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interceptors/index';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { ChartsModule } from 'ng2-charts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import interactionPlugin from '@fullcalendar/interaction';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { RedirectionComponent } from './components/redirection/redirection.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RecoverPasswordComponent,
    RedirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule ,
    FormsModule,
    FullCalendarModule,
    ChartsModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
    NzToolTipModule,
    NzInputModule,
    NzFormModule,
    TooltipModule,
    NzSkeletonModule,
    NzTabsModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzModalModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
