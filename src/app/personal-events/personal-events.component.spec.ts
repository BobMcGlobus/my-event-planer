import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEventsComponent } from './personal-events.component';

describe('PersonalEventsComponent', () => {
  let component: PersonalEventsComponent;
  let fixture: ComponentFixture<PersonalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
