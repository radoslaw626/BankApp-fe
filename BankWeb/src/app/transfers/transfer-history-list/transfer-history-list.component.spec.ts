import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferHistoryListComponent } from './transfer-history-list.component';

describe('TransferHistoryListComponent', () => {
  let component: TransferHistoryListComponent;
  let fixture: ComponentFixture<TransferHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
