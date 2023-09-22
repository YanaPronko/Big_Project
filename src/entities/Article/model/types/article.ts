export type ArticleType = 'IT' | 'Science' | 'Economics';
export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

export interface ArticleBaseBlock {
  id: string;
  type: ArticleBlockType
}

export interface ArticleBlockCode extends ArticleBaseBlock {
  type: 'CODE';
  code: string;
}
export interface ArticleIMGBlock extends ArticleBaseBlock {
  type: 'IMAGE';
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: 'TEXT';
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleBlockCode | ArticleIMGBlock | ArticleTextBlock;

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlock[],
}
