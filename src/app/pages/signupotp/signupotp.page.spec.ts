import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupotpPage } from './signupotp.page';

describe('SignupotpPage', () => {
  let component: SignupotpPage;
  let fixture: ComponentFixture<SignupotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
