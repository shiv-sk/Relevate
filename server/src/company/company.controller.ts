import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findCompnay() {
    const userId = '67f2e861124dc2ac77a1c46e';
    return this.companyService.findCompany(userId);
  }

  @Patch()
  update(@Body() updateCompanyDto: UpdateCompanyDto) {
    const userId = '67f2e861124dc2ac77a1c46e';
    return this.companyService.update(userId, updateCompanyDto);
  }

  @Delete()
  remove() {
    const userId = '67f2e861124dc2ac77a1c46e';
    return this.companyService.remove(userId);
  }
}
