import { MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule  } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule  ],
  exports: [ MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule  ]
})

export class MaterialModule {

}