import { MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule,MatSelectModule, MatDialogModule  } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule,MatSelectModule, MatDialogModule  ],
  exports: [ MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatGridListModule ,MatSelectModule, MatDialogModule ]
})

export class MaterialModule {

}