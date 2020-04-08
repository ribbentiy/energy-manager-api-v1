import { IsNotEmpty } from 'class-validator';


export class CreateIngredientDto {

  @IsNotEmpty()
  readonly title: string;


  nutrition: {
    readonly calories: number,
    readonly proteins: number,
    readonly carbohydrates: number,
    readonly fats: number
  };
  readonly eanCode: string;
  readonly weight: number;
}
