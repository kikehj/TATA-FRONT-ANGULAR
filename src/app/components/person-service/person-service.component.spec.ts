import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonServiceComponent } from './person-service.component';

describe('PersonServiceComponent', () => {
  let component: PersonServiceComponent;
  let fixture: ComponentFixture<PersonServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
