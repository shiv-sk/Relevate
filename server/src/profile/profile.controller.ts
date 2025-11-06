import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findUserProfile() {
    return this.profileService.findUserProfile();
  }

  @Get(':profileId')
  findOne(@Param('profileId') profileId: string) {
    return this.profileService.findOne(profileId);
  }

  @Patch()
  update(@Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(updateProfileDto);
  }

  @Delete()
  remove() {
    return this.profileService.remove();
  }
}
