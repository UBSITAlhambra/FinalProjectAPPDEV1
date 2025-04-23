import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  let sanitizer: DomSanitizer;
  let pipe: SafePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafePipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should bypass security and return the same URL', () => {
    const url = '';
    expect(pipe.transform(url)).toBeTruthy();
  });
});