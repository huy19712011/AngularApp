import { NgModule } from '@angular/core';
import {PreLoginRoutingModule} from './pre-login-routing.module';
import {SharedModule} from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PreLoginService } from './services/pre-login.service';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { PreLoginMenuComponent } from './pre-login-menu/pre-login-menu.component';
import { SignInService } from './services/sign-in.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacultyComponent } from './faculty/faculty.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PreLoginFooterComponent } from './pre-login-footer/pre-login-footer.component';
import { PreLoginHeaderComponent } from './pre-login-header/pre-login-header.component';

@NgModule({
  imports: [
    PreLoginRoutingModule,
    SharedModule
  ],
  declarations: [SignInComponent, SignUpComponent, PreLoginComponent, PreLoginMenuComponent, HomeComponent, AboutUsComponent, ContactUsComponent, FacultyComponent, GalleryComponent, PreLoginFooterComponent, PreLoginHeaderComponent],
  exports:[ ],
  providers:[
    PreLoginService,
    SignInService
  ]
})
export class PreLoginModule { }