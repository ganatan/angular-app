import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill } from './skill';

describe('Skill', () => {
  let component: Skill;
  let fixture: ComponentFixture<Skill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
