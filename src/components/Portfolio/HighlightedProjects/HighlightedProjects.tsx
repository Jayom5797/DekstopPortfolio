import Image from 'next/image';

export default function HighlightedProjects() {
  return (
    <>
      <Image
        src={'/assets/portfolio/landing-laptop.png'}
        style={{ objectFit: 'contain' }}
        height={800}
        width={800}
        alt={'Laptop'}
        className={'laptop'}
      />
      <Image
        src={'/assets/portfolio/landing-mobile.png'}
        height={400}
        width={400}
        style={{ objectFit: 'contain' }}
        alt={'Mobile'}
        className={'mobile'}
      />
      <Image
        src={'/assets/portfolio/landing-watch.png'}
        height={200}
        width={200}
        style={{ objectFit: 'contain' }}
        alt={'Watch'}
        className={'watch'}
      />
    </>
  );
} 