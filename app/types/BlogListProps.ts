export interface BlogListFilter  {
  category?: string,
  page?: number,
}
export interface BlogListProps {
  count?: null | number,
  filter?: BlogListFilter,
}

