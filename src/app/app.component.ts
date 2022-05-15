import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private newUser: any = {
    'id': 3,
    'name': 'New Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz.NEW',
  }
  
  constructor(private userService: UserService){ }

  ngOnInit(): void {
    // this.onUpdatePatchUser();
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    this.deleteUser();
  }

  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      (respone) => { console.table(respone)},
      (err: any) => { console.log(err)},
      () => { console.log('Done Getting Users')},
    );
  }

  onGetUser(): void{
    this.userService.getUser().subscribe(
      (respone) => { console.log(respone)},
      (err: any) => { console.log(err)},
      () => { console.log('Done Getting User')},
    );
  }

  onCreateUser(): void{
    this.userService.createUser(this.newUser).subscribe(
      (respone) => { console.log(respone) },
      (err) => { console.log(err) },
      () => { console.log('Done Creating New User') },
    );
  }

  onUpdateUser(): void{
    this.userService.updateUser(this.newUser).subscribe(
      (respone) => { console.log(respone) },
      (err) => { console.log(err) },
      () => { console.log('Done Updating User') },
    );
  }

  onUpdatePatchUser(): void {
    this.userService.patchUser(this.newUser).subscribe(
      (respone) => { console.log(respone) },
      (err) => { console.log(err) },
      () => { console.log('Done Updating With Option Field') },
    );
  }

  deleteUser(): void {
    this.userService.deleteUser(5).subscribe(
      (respone) => { console.log(respone) },
      (err) => { console.log(err) },
      () => { console.log('Done Deleting User') },
    );
  }
}
