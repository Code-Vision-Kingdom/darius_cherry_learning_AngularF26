import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZenithListItem } from './zenith-list-item';

describe('ZenithListItem', () => {
  let component: ZenithListItem;
  let fixture: ComponentFixture<ZenithListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenithListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ZenithListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
