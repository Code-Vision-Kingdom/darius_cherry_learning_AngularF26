import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShadewoodListItem } from './shadewood-list-item';

describe('ShadewoodListItem', () => {
  let component: ShadewoodListItem;
  let fixture: ComponentFixture<ShadewoodListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadewoodListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ShadewoodListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
