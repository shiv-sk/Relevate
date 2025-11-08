import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorators';
import { UserRole } from 'commons/userRoles.common';
import { Request } from 'express';
import { User } from 'src/auth/interface/user.interfcae';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.JobSeeker)
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @Req() req: Request & { user: User },
  ) {
    return this.applicationService.create(createApplicationDto, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.JobSeeker)
  findAllUserApplications(@Req() req: Request & { user: User }) {
    return this.applicationService.findAllUserApplications(req.user.id);
  }

  @Get(':jobId')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.Employer)
  findAllJobApplications(@Param('jobId') jobId: string) {
    return this.applicationService.findAllJobApplications(jobId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UserRole.Employer, UserRole.JobSeeker)
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    return this.applicationService.update(id, updateApplicationDto);
  }
}
