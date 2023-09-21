type ArticleType = 'IT' | 'Science' | 'Economics';
type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

interface ArticleBaseBlock {
  id: string;
  type: ArticleBlockType
}

interface ArticleBlockCode extends ArticleBaseBlock {
  type: 'CODE';
  code: string;
}
interface ArticleIMGBlock extends ArticleBaseBlock {
  type: 'IMAGE';
  src: string;
  title: string;
}

interface ArticleTextBlock extends ArticleBaseBlock {
  type: 'TEXT';
  paragraphs: string[];
  title?: string;
}

type ArticleBlock = ArticleBlockCode | ArticleIMGBlock | ArticleTextBlock;

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
