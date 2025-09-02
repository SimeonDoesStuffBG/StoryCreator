import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatePage } from './character-create.component';

describe('CharacterCreatePage', () => {
  let component: CharacterCreatePage;
  let fixture: ComponentFixture<CharacterCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCreatePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
