import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetHeaderComponent } from './intranet-header.component';

describe('IntranetHeaderComponent', () => {
  let component: IntranetHeaderComponent;
  let fixture: ComponentFixture<IntranetHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetHeaderComponent]
    });
    fixture = TestBed.createComponent(IntranetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
