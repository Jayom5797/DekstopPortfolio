import Image from 'next/image';

export default function FourthSlide() {
  return (
    <>
      <Image
        src={'/assets/portfolio/work-from-home.svg'}
        alt={'Vova is working from home'}
        height={500}
        width={500}
        style={{ objectFit: 'contain' }}
        className={'person'}
      />
      <Image
        src={'/assets/portfolio/skills/React.svg'}
        alt={'React'}
        height={150}
        width={150}
        style={{ objectFit: 'contain' }}
        className={'react'}
      />
      <Image
        src={'/assets/portfolio/skills/Redux.svg'}
        alt={'React'}
        height={150}
        width={150}
        style={{ objectFit: 'contain' }}
        className={'react'}
      />
      <Image
        src={'/assets/portfolio/skills/Node.svg'}
        alt={'React'}
        height={150}
        width={150}
        style={{ objectFit: 'contain' }}
        className={'react'}
      />
    </>
  );
} 