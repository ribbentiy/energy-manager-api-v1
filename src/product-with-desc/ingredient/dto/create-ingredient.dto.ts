export class CreateIngredientDto {
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