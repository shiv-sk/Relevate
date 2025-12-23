import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileService } from 'src/profile/profile.service';
import { JobService } from 'src/job/job.service';
import { ApplicationService } from 'src/application/application.service';
import { isValidObjectId } from 'mongoose';
import { GenerateJdDto } from './dto/generatejd.dto';

@Injectable()
export class AiService {
  constructor(
    private readonly jobService: JobService,
    private readonly profileService: ProfileService,
    private readonly applicationService: ApplicationService,
  ) {}
  async jobFit(jobId: string, userId: string) {
    await this.jobService.findOne(jobId);
    const profile = await this.profileService.findUserProfile(userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return 'This action adds a new ai';
  }

  async improveProfile(jobId: string, userId: string) {
    await this.jobService.findOne(jobId);
    const profile = await this.profileService.findUserProfile(userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    return 'This action adds a new ai';
  }

  async analyzeCandidate(applicationId: string) {
    const application =
      await this.applicationService.findJobApplication(applicationId);
    const isValidJobId = isValidObjectId(application.jobId);
    if (!isValidJobId) {
      throw new NotFoundException('jobId is invalid');
    }
    const job = await this.jobService.findOne(application.jobId.toString());
    if (!job) {
      throw new NotFoundException('job not found');
    }
    return 'This action adds a new ai';
  }

  generateJobDescription(generateJdDto: GenerateJdDto) {
    return generateJdDto;
  }
}
