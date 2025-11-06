import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ProfileService } from 'src/profile/profile.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Application } from 'src/schemas/application.schema';
import { Profile } from 'src/schemas/profile.schema';

@Injectable()
export class ApplicationService {
  constructor(
    private readonly profileService: ProfileService,
    @InjectModel(Application.name) private applicationModel: Model<Application>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}
  async create(createApplicationDto: CreateApplicationDto) {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const profile = await this.profileModel.findOne({ userId });
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    const profileId = profile._id;
    const newApplication = await this.applicationModel.create({
      userId,
      profileId,
      jobId: createApplicationDto.jobId,
    });
    if (!newApplication) {
      throw new InternalServerErrorException('new application is not created!');
    }
    return newApplication;
  }

  async findAllUserApplications() {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const allUserApplications = await this.applicationModel.find({ userId });
    if (allUserApplications.length === 0) {
      throw new NotFoundException('applications are not found');
    }
    return allUserApplications;
  }

  async findAllJobApplications(jobId: string) {
    const allJobApplications = await this.applicationModel.find({ jobId });
    if (allJobApplications.length === 0) {
      throw new NotFoundException('applications are not found');
    }
    return allJobApplications;
  }

  async update(
    applicationId: string,
    updateApplicationDto: UpdateApplicationDto,
  ) {
    const updatedApplication = await this.applicationModel.findByIdAndUpdate(
      applicationId,
      updateApplicationDto,
      { new: true, runValidators: true },
    );
    if (!updatedApplication) {
      throw new NotFoundException('applications is not found and not updated');
    }
    return updatedApplication;
  }
}
