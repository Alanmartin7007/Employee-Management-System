import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDepartmentComponent } from './list-department.component';
import { DepartmentService } from '../department.service';
import { of, throwError } from 'rxjs';
import { Department } from '../department';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListDepartmentComponent', () => {
  let component: ListDepartmentComponent;
  let fixture: ComponentFixture<ListDepartmentComponent>;
  let departmentService: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDepartmentComponent],
      providers: [DepartmentService],
      imports: [HttpClientTestingModule] 
    });
    fixture = TestBed.createComponent(ListDepartmentComponent);
    component = fixture.componentInstance;
    departmentService = TestBed.inject(DepartmentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch departments on initialization', () => {
    const dummyDepartments: Department[] = [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Sales' }
      // Add more sample departments here
    ];

    spyOn(departmentService, 'getList').and.returnValue(of(dummyDepartments));

    component.ngOnInit();

    expect(departmentService.getList).toHaveBeenCalled();
    expect(component.list).toEqual(dummyDepartments);
  });

  it('should handle department deletion', () => {
    spyOn(window, 'alert'); // Mocking window.alert

    const departmentId = 1; // Replace with a sample department ID

    spyOn(departmentService, 'delete').and.returnValue(of(undefined));

    spyOn(component, 'ngOnInit'); // Spy on ngOnInit

    component.setDepartmentId(departmentId);
    component.delete();

    expect(window.alert).toHaveBeenCalledWith('delete successful');
    expect(departmentService.delete).toHaveBeenCalledWith(departmentId);
    expect(component.ngOnInit).toHaveBeenCalled(); // Check ngOnInit has been called
  });
  it('should handle department deletion error', () => {
    spyOn(window, 'alert'); // Mocking window.alert

    const departmentId = 1; // Replace with a sample department ID

    spyOn(departmentService, 'delete').and.returnValue(throwError('Error'));

    component.setDepartmentId(departmentId);
    component.delete();

    expect(window.alert).toHaveBeenCalledWith('error');
    // Add more expectations based on error handling in the component
  });
});
