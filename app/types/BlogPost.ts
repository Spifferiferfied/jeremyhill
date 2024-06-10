import { Tag } from "./Tag"
export interface BlogPost {
  slug: any,
  title: string,
  blurb: any,
  tag: string,
  body: any,
  date: string,
  tags: Tag[],
  mainImage: any,
}
