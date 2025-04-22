import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaGalleryComponent } from './media-gallery.component';
import { SafePipe } from '../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';

describe('MediaGalleryComponent', () => {
  let component: MediaGalleryComponent;
  let fixture: ComponentFixture<MediaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SafePipe
      ],
      declarations: [MediaGalleryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display media items', () => {
    const compiled = fixture.nativeElement;
    const mediaItems = compiled.querySelectorAll('.card');
    expect(mediaItems.length).toBeGreaterThan(0);
  });

  it('should render an image for media with type "image"', () => {
    const imageUrl = ''; // Add your image URL here
    component.mediaItems = [
      { type: 'image', url: imageUrl, title: 'Sample Image' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const imgElement = compiled.querySelector('img');

    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(imageUrl);
  });

  it('should render a video iframe for media with type "video"', () => {
    const videoUrl = ''; // Add a valid embed URL here
    component.mediaItems = [
      { type: 'video', url: videoUrl, title: 'Sample Video' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const iframeElement = compiled.querySelector('iframe');

    expect(iframeElement).toBeTruthy();
    expect(iframeElement.src).toContain(videoUrl);
  });
});