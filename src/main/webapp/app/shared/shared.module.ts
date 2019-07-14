import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JHipster1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JHipster1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JHipster1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipster1SharedModule {
  static forRoot() {
    return {
      ngModule: JHipster1SharedModule
    };
  }
}
