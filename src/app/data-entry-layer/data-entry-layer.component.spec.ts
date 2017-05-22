import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryLayerComponent } from './data-entry-layer.component';

describe('DataEntryLayerComponent', () => {
  let component: DataEntryLayerComponent;
  let fixture: ComponentFixture<DataEntryLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntryLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
