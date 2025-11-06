import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from 'src/schemas/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}
  async create(createProfileDto: CreateProfileDto) {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const newProfile = await this.profileModel.create({
      name: createProfileDto.name,
      email: createProfileDto.email,
      bio: createProfileDto.bio,
      currentLocation: createProfileDto.currentLocation,
      lookingFor: createProfileDto.lookingFor,
      skills: createProfileDto.skills,
      education: createProfileDto.education,
      projects: createProfileDto.projects,
      socialMedia: createProfileDto.socialMedia,
      experience: createProfileDto.experience,
      userId,
    });
    if (!newProfile) {
      throw new InternalServerErrorException('Profile is not created!');
    }
    return newProfile;
  }

  async findOne(profileId: string) {
    const profile = await this.profileModel.findById(profileId);
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async findUserProfile() {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const profile = await this.profileModel.findOne({ userId });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async update(updateProfileDto: UpdateProfileDto) {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const updatedProfile = await this.profileModel.findOneAndUpdate(
      { userId },
      updateProfileDto,
      { new: true, runValidators: true },
    );
    if (!updatedProfile) {
      throw new NotFoundException('Profile not found and updated');
    }
    return updatedProfile;
  }

  async remove() {
    const userId = '67f2e7e2124dc2ac77a1c468';
    const deletedProfile = await this.profileModel.findOneAndDelete({ userId });
    if (!deletedProfile) {
      throw new NotFoundException('Profile not found and deleted');
    }
    return 'profile deleted successfully';
  }
}
