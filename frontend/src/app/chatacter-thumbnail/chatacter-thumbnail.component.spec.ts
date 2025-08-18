import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatacterThumbnailComponent } from './chatacter-thumbnail.component';

describe('ChatacterThumbnailComponent', () => {
  let component: ChatacterThumbnailComponent;
  let fixture: ComponentFixture<ChatacterThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatacterThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatacterThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
