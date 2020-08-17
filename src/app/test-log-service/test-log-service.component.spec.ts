import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogServiceComponent } from './test-log-service.component';

describe('TestLogServiceComponent', () => {
  let component: TestLogServiceComponent;
  let fixture: ComponentFixture<TestLogServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLogServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLogServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
