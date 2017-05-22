import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisLayerComponent } from './analysis-layer.component';

describe('AnalysisLayerComponent', () => {
  let component: AnalysisLayerComponent;
  let fixture: ComponentFixture<AnalysisLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
