import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SubcriptionSubjectService } from 'src/app/service/subcription-subject.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit, AfterViewInit {

  hobby: any = [];
  personForm: FormGroup;
  subscription: Subscription;
  data: any = {};
  removeLastOnBackspace:any = [];

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private service: ApiService, private subscriptionService: SubcriptionSubjectService) {
    // this.subscription = this.subscriptionService.getMessage().subscribe(message => {
    //   this.data = message;
    //   // this.personForm.patchValue(this.data);
    //   // this.hobby = message.hobby;
    //     // this.personForm.get('first_name').setValue(message.first_name);
    //   // this.personForm.get('last_name').setValue(message.last_name);
    //   // this.personForm.get('age').setValue(message.age);

    //   // // var hobbyArray = message.hobby.split(",");
    //   // this.personForm.get('hobby').setValue(message.hobby);
    // });
  }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      hobby: this.hobby,
    });
  }

  ngAfterViewInit() {
      var data = JSON.parse(localStorage.getItem('selectedData'));

    if(data == null) {

    }
    else {
      this.personForm.patchValue(data);
    }
    
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.personForm.invalid) {

      const invalid = [];
      const controls = this.personForm.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          invalid.push(name);
        }
      }

      this.toastr.error('The Following fields are Invalid: ' + invalid, 'Invalid Fields');

      return;

    }

    this.service.savePerson(this.personForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(this.personForm.value)
          this.personForm.reset();
          for (let i in this.personForm.controls) {
            this.personForm.controls[i].setErrors(null);
          }

          this.toastr.success(data.message, 'Success');
        },
        error => {
          this.toastr.error('error', error.error.message);
        });
  }


}
