import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvent } from './list-event';

describe('ListEvent', () => {
  let component: ListEvent;
  let fixture: ComponentFixture<ListEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
