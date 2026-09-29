import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerrariaListItem } from './terraria-list-item';

describe('TerrariaListItem', () => {
  let component: TerrariaListItem;
  let fixture: ComponentFixture<TerrariaListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrariaListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TerrariaListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
