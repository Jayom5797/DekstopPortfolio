import styled, { css } from 'styled-components';
import { slideTop } from '../../../../design-system/reusableCss';

type ParagraphProps = {
  $margin: string;
  $withDarkColor: boolean;
  $variant: 'large' | 'medium' | 'small';
  $withAnimatedPresence: boolean;
};

const smallVariantStyles = css`
  font-size: 0.75rem;
`;
const mediumVariantStyles = css`
  font-size: 1rem;
`;
const largeVariantStyles = css`
  font-size: 1.25rem;
`;

const paragraphAnimation = css`
  animation: ${slideTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const P = styled.p<ParagraphProps>`
  z-index: 5;
  color: ${({ theme, $withDarkColor }) =>
    $withDarkColor ? theme.portfolio.text.dark : theme.portfolio.text.light};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: ${({ $margin }) => $margin};
  line-height: 1.5;

  ${({ $variant }) => $variant === 'small' && smallVariantStyles};
  ${({ $variant }) => $variant === 'medium' && mediumVariantStyles};
  ${({ $variant }) => $variant === 'large' && largeVariantStyles};

  ${({ $withAnimatedPresence }) => $withAnimatedPresence && paragraphAnimation};

  @media ${({ theme }) => theme.media.phone} {
    font-size: 1rem;
  }
`; 