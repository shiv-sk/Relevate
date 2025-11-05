import {
  ArrayMaxSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
export class CreateCompanyDto {
  @IsNotEmpty()
  @Length(3, 200)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  officialEmail: string;

  @IsNotEmpty()
  @Length(3, 2000)
  @IsString()
  about: string;

  @IsNotEmpty()
  @Length(3, 200)
  @IsString()
  domain: string;

  @IsNotEmpty()
  @Length(3, 200)
  @IsString()
  size: string;

  @IsNotEmpty()
  @Length(3, 2000)
  @IsString()
  address: string;

  @IsNotEmpty()
  @Length(3, 200)
  @IsString()
  contact: string;

  @ArrayMaxSize(7)
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  socialMedia?: string[];
}
