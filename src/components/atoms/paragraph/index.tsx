/** @format */

import React from 'react';
import { MotionDiv } from '../MotionDiv';
import { ParagraphFadeAnimation } from '@/animations';

interface ParagraphProps {
	children: string | any;
	className: string;
}

export default function Paragraph({ className, children }: ParagraphProps) {
	return (
		<MotionDiv
			variants={ParagraphFadeAnimation}
			initial='close'
			whileInView='open'
      viewport={{once:true}}
			className={className}>
			{children}
		</MotionDiv>
	);
}
