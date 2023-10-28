import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetSidebarComponent } from './intranet-sidebar.component';

describe('IntranetSidebarComponent', () => {
  let component: IntranetSidebarComponent;
  let fixture: ComponentFixture<IntranetSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntranetSidebarComponent]
    });
    fixture = TestBed.createComponent(IntranetSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
