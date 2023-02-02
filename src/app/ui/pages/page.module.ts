import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent} from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule],
  exports:[HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule { }
