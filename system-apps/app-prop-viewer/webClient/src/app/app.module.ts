
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CssUrlPipe } from './css-url.pipe';

// import libraries modules
 
import { AppComponent } from './app.component';
   
@NgModule({
  declarations: [
    AppComponent,
    CssUrlPipe
  ],
  imports: [
    CommonModule 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
