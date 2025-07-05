import Image from 'next/image';

interface ProjectDesktopSlideProps {
  slideNumberImg: string;
  projectImg: string;
}

export default function ProjectDesktopSlide({ slideNumberImg, projectImg }: ProjectDesktopSlideProps) {
  return (
    <>
      <Image
        src={slideNumberImg}
        height={200}
        width={200}
        style={{ objectFit: 'contain' }}
        alt={'Slide number'}
      />
      <Image
        src={projectImg}
        height={800}
        width={800}
        style={{ objectFit: 'contain' }}
        alt={'Project'}
      />
    </>
  );
} 