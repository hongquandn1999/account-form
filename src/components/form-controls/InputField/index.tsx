import * as React from 'react';
import { Input, Text } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

interface InputCustomizeProps {
	label: string;
	control: any;
	required: boolean;
	name: string;
	disabled: boolean;
	defaultValue: string;
	_disable?: object;
	_focus?: object;
	pattern?: any;
	type?: string;
	errors: any;
}

export default function InputCustomize(props: InputCustomizeProps) {
	const {
		name,
		control,
		disabled,
		defaultValue,
		_disable,
		_focus,
		required,
		pattern,
		type,
		errors,
	} = props;
	return (
		<>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue}
				rules={{ required: required, pattern: pattern }}
				render={({ field }) => (
					<Input
						{...field}
						disabled={disabled}
						_disabled={_disable}
						_focus={_focus}
						type={type ? type : 'text'}
						borderColor={errors[name] ? 'primary' : 'borderColor'}
						background={errors[name] ? 'backgroundError' : ''}
					/>
				)}
			/>
			{errors[name] ? (
				<Text mt={4} fontSize={12} color='textError'>
					{errors[name].message}
				</Text>
			) : (
				<></>
			)}
		</>
	);
}
