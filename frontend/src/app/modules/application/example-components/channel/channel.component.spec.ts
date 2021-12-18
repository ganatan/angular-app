import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelComponent } from './channel.component';

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ChannelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    component.channel = {
      title: 'NetFlix',
      name: 'NetFlix',
      releaseDate: '03/01/1982',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
