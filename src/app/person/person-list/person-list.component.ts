import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { SubcriptionSubjectService } from 'src/app/service/subcription-subject.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public displayedColumns = ['select', 'FirstName', 'LastName', 'Age', 'Hobby', 'Edit', 'Delete'];

  // dataSource: any = new MatTableDataSource<any>();
  reviewList: any = [];
  public dataSource = new MatTableDataSource<any>();
  selection: any = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  blob: Blob;
  personList: any = [];


  constructor(private service: ApiService, private router: Router, private toastr: ToastrService, private subscriptionService:SubcriptionSubjectService) {

  }

  ngOnInit() {
    this.findAllPersons();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  findAllPersons() {
    this.service.findAllPersons().subscribe(res => {
      this.dataSource.data = res;
    },
      error => {
        // this.toastr.error(error.error.message);
        console.log(error)
      }
    )
  }

  editSelected(e: any) {
    localStorage.setItem('selectedData', JSON.stringify(e));
      // this.subscriptionService.sendMessage(e);
      this.router.navigate(['home/edit-person']);
  }

  deleteSelected(e: any) {

    var r = confirm("Are you sure you want to delete?");
    if (r == true) {
      this.service.deletePerson(e.id).subscribe(res => {
        this.findAllPersons();
        this.toastr.success('Deleted Successfully');
      },
        error => {
          this.toastr.error(error.error.message, 'error');
        }
      )
    } else {

    }



  }


  getSelectedItems() {
    console.log(this.selection.selected);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



}
