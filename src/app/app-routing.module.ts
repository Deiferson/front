import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserComponent } from './user/user-list/user.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "user/create",
    component: UserCreateComponent
  },
  {
    path: "user/delete",
    component: UserDeleteComponent
  },
  {
    path: "user/update",
    component: UserUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
