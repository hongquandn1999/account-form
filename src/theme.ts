import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	colors: {
		primary: '#f65e4e',
		primaryDark: '#ee5140',
		primaryHover: '#fc7365',
		textError: '#FF3E3E',
		backgroundError: '#feeeed',
		borderColor: '#E5E5E5',
		textColor: '#585858',
	},
});

export default customTheme;
