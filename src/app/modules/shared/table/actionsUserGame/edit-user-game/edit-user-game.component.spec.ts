import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserGameComponent } from './edit-user-game.component';

describe('EditUserGameComponent', () => {
  let component: EditUserGameComponent;
  let fixture: ComponentFixture<EditUserGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
