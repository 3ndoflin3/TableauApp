import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfotabPage } from './infotab.page';

describe('InfotabPage', () => {
  let component: InfotabPage;
  let fixture: ComponentFixture<InfotabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfotabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
