import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DepartmentService } from './department.service';
import { Department } from './department';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DepartmentService]
    });

    service = TestBed.inject(DepartmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a department', () => {
    const newDepartment: Department = {
      id: 1,
      name: 'HR'
    };

    service.add(newDepartment).subscribe((department: Department) => {
      expect(department).toEqual(newDepartment);
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('POST');
    req.flush(newDepartment);
  });

  it('should retrieve departments', () => {
    const dummyDepartments: Department[] = [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Sales' }
    ];

    service.getList().subscribe((departments: Department[]) => {
      expect(departments.length).toBe(dummyDepartments.length);
      expect(departments).toEqual(dummyDepartments);
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDepartments);
  });

  // Add similar tests for delete, update, getById methods
});
