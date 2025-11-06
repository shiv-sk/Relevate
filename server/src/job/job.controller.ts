import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get('/myjobs')
  findAllMyJobs() {
    return this.jobService.findAllMyJobs();
  }

  @Get(':jobId')
  findOne(@Param('jobId') jobId: string) {
    return this.jobService.findOne(jobId);
  }

  @Patch(':jobId')
  update(@Param('jobId') jobId: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobService.update(jobId, updateJobDto);
  }

  @Delete(':jobId')
  remove(@Param('jobId') jobId: string) {
    return this.jobService.remove(jobId);
  }
}
