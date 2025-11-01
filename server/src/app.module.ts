import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { ApplicationModule } from './application/application.module';
import { CompanyModule } from './company/company.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [ProfileModule, ApplicationModule, CompanyModule, JobModule],
  controllers: [AppController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
