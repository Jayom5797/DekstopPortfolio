import Image from 'next/image';

interface DevToArticleProps {
  cover_image: string;
  title: string;
  tagIconsMap: Record<string, string>;
  tag: string;
}

export default function DevToArticle({ cover_image, title, tagIconsMap, tag }: DevToArticleProps) {
  return (
    <>
      <Image
        src={cover_image}
        height={250}
        width={400}
        style={{ objectFit: 'cover' }}
        alt={title}
      />
      <Image
        src={tagIconsMap[tag]}
        height={35}
        width={35}
        style={{ objectFit: 'contain' }}
        alt={tag}
      />
    </>
  );
} 