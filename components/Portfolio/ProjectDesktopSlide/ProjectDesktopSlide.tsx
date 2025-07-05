import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './ProjectDesktopSlide.styles';
import { IHighlightedProject } from '../../../types/portfolio';
import Image from 'next/image';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ActionButton from '../ActionButton/ActionButton';
import { FiCast, FiGithub } from 'react-icons/fi';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

/**
 *Renders full-viewport project slide
 *@function Slide
 *@param {IHighlightedProject} projectDetails - project details data to be mapped into view
 *@returns {JSX.Element} - Rendered ProjectDesktopSlide component
 */
const ProjectDesktopSlide = (): JSX.Element => {
  return null;
};

export default ProjectDesktopSlide;
