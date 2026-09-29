import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerrariaList } from './terraria-list';

describe('TerrariaList', () => {
  let component: TerrariaList;
  let fixture: ComponentFixture<TerrariaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrariaList],
    }).compileComponents();

    fixture = TestBed.createComponent(TerrariaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
