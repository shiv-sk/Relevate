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

@Injectable()
export class ApplicationService {
  constructor(
    private readonly profileService: ProfileService,
    @InjectModel(Application.name) private applicationModel: Model<Application>,
  ) {}
  async create(createApplicationDto: CreateApplicationDto, userId: string) {
    const profile = await this.profileService.findUserProfile(userId);
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    const profileId = profile._id;
    const newApplication = await this.applicationModel.create({
      userId,
      profileId,
      jobId: createApplicationDto.jobId,
      profileSnapshot: {
        lookingFor: profile.lookingFor,
        name: profile.name,
        email: profile.email,
        currentLocation: profile.currentLocation,
        skills: profile.skills,
        experience: profile.experience,
        projects: profile.projects,
      },
      salaryExcepted: createApplicationDto.salaryExcepted,
      availability: createApplicationDto.availability,
      experience: createApplicationDto.experience,
      preferredLocation: createApplicationDto.preferredLocation,
    });
    if (!newApplication) {
      throw new InternalServerErrorException('new application is not created!');
    }
    return newApplication;
  }

  async findAllUserApplications(userId: string) {
    const allUserApplications = await this.applicationModel
      .find({ userId })
      .populate({
        path: 'jobId',
        select: 'title companyId',
        populate: { path: 'companyId', select: 'name' },
      });
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
