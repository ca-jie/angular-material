import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import 'hammerjs';
import { FormioComponent } from './formio.component';
import { MaterialComponent } from './components/MaterialComponent';
import { MaterialNestedComponent } from './components/MaterialNestedComponent';
import { MaterialButtonComponent } from './components/button/button.component';
import { MaterialTextfieldComponent } from './components/textfield/textfield.component';
import { MaterialTextareaComponent } from './components/textarea/textarea.component';
import { MaterialColumnsComponent } from './components/columns/columns.component';
import { MaterialContainerComponent } from './components/container/container.component';
import { MaterialPanelComponent } from './components/panel/panel.component';
import { MaterialTabsComponent } from './components/tabs/tabs.component';
import { MaterialDateComponent } from './components/date/date.component';
import { MaterialDataGridComponent } from './components/datagrid/datagrid.component';
import { MaterialWellComponent } from './components/well/well.component';
import { FormioLoader } from 'angular-formio/components/loader/formio.loader';
import { RequiredDirective } from './required.directive';

@NgModule({
  declarations: [
    FormioComponent,
    MaterialButtonComponent,
    MaterialTextfieldComponent,
    MaterialTextareaComponent,
    MaterialColumnsComponent,
    MaterialContainerComponent,
    MaterialDataGridComponent,
    MaterialPanelComponent,
    MaterialTabsComponent,
    MaterialDateComponent,
    MaterialWellComponent,
    MaterialComponent,
    MaterialNestedComponent,
    RequiredDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    FormioComponent,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatIconModule
  ],
  entryComponents: [
    MaterialButtonComponent,
    MaterialTextfieldComponent,
    MaterialTextareaComponent,
    MaterialColumnsComponent,
    MaterialContainerComponent,
    MaterialDataGridComponent,
    MaterialPanelComponent,
    MaterialTabsComponent,
    MaterialDateComponent,
    MaterialWellComponent,
    MaterialComponent,
    MaterialNestedComponent
  ],
  providers: [
    FormioLoader
  ]
})
export class MatFormioModule { }