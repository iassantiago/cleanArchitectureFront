import { Component, OnInit } from '@angular/core';
import { PostCreateUserUseCase } from 'src/app/domain/usecases/user.usecase';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  job: string;

  constructor(private userUserCase: PostCreateUserUseCase) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.name + this.job);
    console.log('');
    this.userUserCase
      .invoke({ name: this.name, job: this.job })
      .subscribe((res) => {console.log(res);
  });
}
}
