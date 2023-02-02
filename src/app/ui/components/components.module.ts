import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserGateway } from 'src/app/domain/models/gateway/user.gateway';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/infraestructure/driven-adapter/user/user.service';
import { HttpClientModule} from '@angular/common/http';
import { PostCreateUserUseCase } from 'src/app/domain/usecases/user.usecase';
import { UserComponent} from './user/user.component';
import { DomainModule } from 'src/app/domain/domain.module';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule
  ],
  providers:[
    {provide:CreateUserGateway, useClass: UserService},
],
exports:[UserComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ComponentsModule { }
