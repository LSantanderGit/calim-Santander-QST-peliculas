import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListMoviesComponent } from './app-list-movies.component';

describe('AppListMoviesComponent', () => {
  let component: AppListMoviesComponent;
  let fixture: ComponentFixture<AppListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppListMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
