import { Category } from './Category'
export interface BlogPost {
  slug: any,
  title: string,
  blurb: any,
  category: Category,
  body: any,
  date: string,
  subCategories: Category[],
  mainImage: any,
}
