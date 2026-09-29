import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmorList } from './armor-list';

describe('ArmorList', () => {
  let component: ArmorList;
  let fixture: ComponentFixture<ArmorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmorList],
    }).compileComponents();

    fixture = TestBed.createComponent(ArmorList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
