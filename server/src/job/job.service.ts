import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from 'src/schemas/job.schema';
import { Model } from 'mongoose';
import { Company } from 'src/schemas/company.schema';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(Job.name) private jobModel: Model<Job>,
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}
  async create(createJobDto: CreateJobDto) {
    const userId = '67f2e861124dc2ac77a1c46e';
    const company = await this.companyModel.findOne({ userId });
    if (!company) {
      throw new NotFoundException('you are not created company yet');
    }
    const companyId = company._id;
    const newJob = await this.jobModel.create({
      title: createJobDto.title,
      description: createJobDto.description,
      salary: createJobDto.salary,
      level: createJobDto.level,
      type: createJobDto.type,
      location: createJobDto.location,
      requiredSkills: createJobDto.requiredSkills,
      companyId,
    });
    if (!newJob) {
      throw new InternalServerErrorException('new job is not created!');
    }
    return newJob;
  }

  async findAll() {
    const allJobs = await this.jobModel.find();
    if (allJobs.length === 0) {
      throw new NotFoundException('Jobs are not found');
    }
    return allJobs;
  }

  async findAllMyJobs() {
    const userId = '67f2e861124dc2ac77a1c46e';
    const company = await this.companyModel.findOne({ userId });
    if (!company) {
      throw new NotFoundException('you are not created company yet');
    }
    const companyId = company._id;
    const allMyJobs = await this.jobModel.find({ companyId });
    if (allMyJobs.length === 0) {
      throw new NotFoundException('you are not created jobs yet');
    }
    return allMyJobs;
  }

  async findOne(jobId: string) {
    const job = await this.jobModel.findById(jobId);
    if (!job) {
      throw new NotFoundException('Job not found');
    }
    return job;
  }

  async update(jobId: string, updateJobDto: UpdateJobDto) {
    const updatedJob = await this.jobModel.findByIdAndUpdate(
      jobId,
      updateJobDto,
      { new: true },
    );
    if (!updatedJob) {
      throw new NotFoundException('job not found and updated');
    }
    return updatedJob;
  }

  async remove(jobId: string) {
    const job = await this.jobModel.findByIdAndDelete(jobId);
    if (!job) {
      throw new NotFoundException('job not found and deleted');
    }
    return 'job successfully deleted';
  }
}
