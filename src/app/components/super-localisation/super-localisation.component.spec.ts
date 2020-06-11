import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperLocalisationComponent } from './super-localisation.component';

describe('SuperLocalisationComponent', () => {
  let component: SuperLocalisationComponent;
  let fixture: ComponentFixture<SuperLocalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperLocalisationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
