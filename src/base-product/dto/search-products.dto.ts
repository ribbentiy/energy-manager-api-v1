import { IsNotEmpty, IsNumberString, IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class SearchProductsDto {

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @Matches(/[а-яА-Яa-zA-Z0-9]/i)
  substr: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  skip: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  limit: number;
}
