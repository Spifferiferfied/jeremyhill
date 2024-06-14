export interface BlogListFilter  {
  category?: string,
  page?: number,
}
export interface BlogListProps {
  count: number,
  filter?: BlogListFilter,
}

