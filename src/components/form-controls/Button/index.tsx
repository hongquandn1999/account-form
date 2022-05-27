import * as React from 'react';
import { Button } from '@chakra-ui/react';

export interface ButtonProps {
	content: string;
}

export default function ButtonCustomize({ content }: ButtonProps) {
	return (
		<Button
			type='submit'
			size='md'
			color='white'
			bgColor='primary'
			_hover={{ bgColor: 'primaryHover' }}
			_active={{ bgColor: 'primaryDark' }}
			_focus={{ boxShadow: 'none' }}>
			{content}
		</Button>
	);
}
