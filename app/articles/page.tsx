import { Metadata } from 'next';
import ArticleContent from './content.mdx'

export const metadata: Metadata = {
  title: "مقالات ",
  description: "لیست ترجمه مفالات پال گرام به فارسی",
};


export default function Page() {
  return <ArticleContent />
}