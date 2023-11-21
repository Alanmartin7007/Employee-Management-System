import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './Authentication/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [AuthService]
    });

    authService = TestBed.inject(AuthService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EMS PORTAL SPERIDIAN'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EMS PORTAL SPERIDIAN');
  });

  it('should log out when created', () => {
    spyOn(authService, 'logout'); // Spy on the logout method

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(authService.logout).toHaveBeenCalled(); // Check if logout method is called
  });

  // Add more tests as needed based on your component behavior
});
