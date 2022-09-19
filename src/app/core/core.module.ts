import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ExampleService } from './services/example/example.service';

@NgModule({
  imports: [
  ],
  providers: [
   ExampleService
  ],
  declarations: []
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
