import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from 'src/app/Services/header.service';
// import { DesignationService } from 'src/app/Services/designation.service';

const ServiceModules = [HeaderService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    HeaderService,
    // DesignationService
  ],
})
export class ServicesModule {}
