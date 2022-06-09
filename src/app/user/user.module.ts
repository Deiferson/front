import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user-list/user.component';
import { UserService } from './user.service';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


@NgModule({
  declarations: [UserComponent, UserCreateComponent, UserUpdateComponent, UserDeleteComponent],
  imports: [
    CommonModule
  ],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
