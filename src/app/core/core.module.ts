import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPermissionsModule } from 'ngx-permissions';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// guard
import { AuthGuard } from './guards/auth.guard';

// service
import { ValidationService } from './services/validation.service';
import { UserService } from './services/user.service';
import { InterceptorService } from './services/interceptor.service';
import { ApplicationService } from './services/application.service';
import { NotificationService } from './services/notification.service';
// directive
import { NumberDirective } from './directive/number.directive';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
//----------------Material----------------//
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
// component
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ItemPerPageFilerComponent } from './components/item-per-page-filer/item-per-page-filer.component';

import { ThreeDecimalNumberDirective } from './directive/three-decimal-number.directive';

import { OrderByPipe } from './pipes/order-by.pipe';
import { AscendingPipe } from './pipes/ascending.pipe';
import { ConfigComponent } from './components/config/config.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BelowTopNavComponent } from './components/below-top-nav/below-top-nav.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { AddOpportunityModalComponent } from './components/add-opportunity-modal/add-opportunity-modal.component';
import { MyPipelineComponent } from './components/pipeline-tab/my-pipeline/my-pipeline.component';
import { PipelineSnapshotComponent } from './components/pipeline-tab/pipeline-snapshot/pipeline-snapshot.component';
import { OpportunityWonModalComponent } from './components/opportunity-won-modal/opportunity-won-modal.component';
import { OpportunityLostModalComponent } from './components/opportunity-lost-modal/opportunity-lost-modal.component';
import { AddTaskPipelineModalComponent } from './components/add-task-pipeline-modal/add-task-pipeline-modal.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    NumberDirective,
    TimeFormatPipe,
    ConfirmDialogComponent,
    PaginationComponent,
    ItemPerPageFilerComponent,
    ItemPerPageFilerComponent,
    ThreeDecimalNumberDirective,
    OrderByPipe,
    AscendingPipe,
    ConfigComponent,
    TopNavComponent,
    BelowTopNavComponent,
    AddTaskModalComponent,
    AddOpportunityModalComponent,
    MyPipelineComponent,
    PipelineSnapshotComponent,
    OpportunityWonModalComponent,
    OpportunityLostModalComponent,
    AddTaskPipelineModalComponent,
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    AutocompleteLibModule,
    NgxPermissionsModule,
    GooglePlaceModule,
    OwlDateTimeModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DragDropModule,
    //----------------Material----------------//
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, MatBottomSheetModule, MatFormFieldModule
    //----------------Material----------------//
  ],
  exports: [
    NgbModule,
    SidenavComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    AutocompleteLibModule,
    NumberDirective,
    TimeFormatPipe,
    GooglePlaceModule,
    OwlDateTimeModule,
    FlatpickrModule,
    CalendarModule,
    ThreeDecimalNumberDirective,
    TopNavComponent,
    BelowTopNavComponent,
    MyPipelineComponent,
    PipelineSnapshotComponent,
    //----------------Material----------------//
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, MatBottomSheetModule, MatFormFieldModule,
    //----------------Material----------------//
    LoadingComponent,
    PaginationComponent,
    ItemPerPageFilerComponent,
    OrderByPipe,
    AscendingPipe,
    ConfigComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AddTaskModalComponent,
    AddOpportunityModalComponent,
    OpportunityWonModalComponent,
    OpportunityLostModalComponent,
    AddTaskPipelineModalComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        ValidationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        ApplicationService,
        NotificationService
      ]
    }
  }
}
