import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from 'src/schemas/company.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const newCompany = await this.companyModel.create({
      name: createCompanyDto.name,
      officialEmail: createCompanyDto.officialEmail,
      about: createCompanyDto.about,
      domain: createCompanyDto.domain,
      size: createCompanyDto.size,
      address: createCompanyDto.address,
      contact: createCompanyDto.contact,
      socialMedia: createCompanyDto.socialMedia,
      userId: '67f2e861124dc2ac77a1c46e',
    });
    if (!newCompany) {
      throw new InternalServerErrorException('server error');
    }
    return newCompany;
  }

  async findCompany(userId: string) {
    const isValidUserId = mongoose.isValidObjectId(userId);
    if (!isValidUserId) {
      throw new BadRequestException('Invalid userId');
    }
    const company = await this.companyModel.find({ userId: userId });
    if (!company) {
      throw new NotFoundException('company not found');
    }
    return company;
  }

  update(userId: string, updateCompanyDto: UpdateCompanyDto) {
    //find company by userId and update
    console.log(updateCompanyDto);
    return `This action updates a #${userId} company`;
  }

  remove(userId: string) {
    //find company by userId and delete
    return `This action removes a #${userId} company`;
  }
}
