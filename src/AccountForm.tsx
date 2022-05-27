import {
	Box,
	Flex,
	Center,
	Heading,
	Stack,
	FormControl,
	FormLabel,
	Alert,
	AlertIcon,
	AlertDescription,
	Input,
	Button,
} from '@chakra-ui/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiErrorWarningLine } from 'react-icons/ri';
import ButtonCustomize from './components/form-controls/Button';
import InputCustomize from './components/form-controls/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PASSWORD_VALIDATE } from './constants/constant';

interface AccountFormProps {
	onSubmitForm: (values: any) => void;
}

interface Inputs {
	email: string;
	password: string;
	confirmPassword: string;
}

function AccountForm({ onSubmitForm }: AccountFormProps) {
	const schema = yup
		.object({
			email: yup.string().required(),
			password: yup
				.string()
				.matches(
					PASSWORD_VALIDATE,
					'Minimum eight characters, at least one letter, one number and one special character .'
				)
				.required(),
			confirmPassword: yup
				.string()
				.required('Confirm password is required.')
				.oneOf([yup.ref('password')], 'Passwords does not match'),
		})
		.required();

	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const onSubmitAccountForm: SubmitHandler<Inputs> = (values) => {
		if (!onSubmitForm) return;
		onSubmitForm(values);
	};

	return (
		<Box bgColor='backgroundColor' h='100vh'>
			<Center>
				<Flex width='464px' my='64px' direction='column' align='center'>
					<Heading mb='16px' fontSize='24px'>
						Account
					</Heading>
					<Stack w='full' spacing='16px'>
						<form onSubmit={handleSubmit(onSubmitAccountForm)}>
							<Stack
								as='section'
								w='full'
								p='32px'
								spacing='24px'
								direction='column'
								bgColor='white'
								borderRadius='4px'>
								<Heading fontSize='16px'>Set Password</Heading>
								<FormControl>
									<Alert status='error' bgColor='backgroundError'>
										<AlertIcon as={RiErrorWarningLine} />
										<AlertDescription fontSize='12px' color='primary'>
											Your account don’t have password yet. Set password so you
											can log in with your Layoutbase account.
										</AlertDescription>
									</Alert>
								</FormControl>
								<FormControl>
									<FormLabel htmlFor='email' fontSize='12px' color='textColor'>
										Email (Your account)
									</FormLabel>
									<InputCustomize
										control={control}
										defaultValue='hello@branch8.com'
										disabled={true}
										label=''
										name='email'
										required={true}
										_disable={{
											bgColor: 'backgroundColorInputDisable',
											color: 'textInputDisable',
											opacity: 1,
											cursor: 'not-allowed',
										}}
										errors={errors}
									/>
								</FormControl>
								<FormControl>
									<FormLabel
										htmlFor='password'
										fontSize='12px'
										color='textColor'>
										Set Password
									</FormLabel>

									<InputCustomize
										control={control}
										defaultValue=''
										disabled={false}
										label=''
										name='password'
										required={true}
										_focus={{ borderColor: 'primary', boxShadow: 'none' }}
										type='password'
										errors={errors}
									/>
								</FormControl>
								<FormControl>
									<FormLabel
										htmlFor='confirmPassword'
										fontSize='12px'
										color='textColor'>
										Confirm Password
									</FormLabel>
									<InputCustomize
										control={control}
										defaultValue=''
										disabled={false}
										label=''
										name='confirmPassword'
										required={true}
										_focus={{ borderColor: 'primary', boxShadow: 'none' }}
										type='password'
										errors={errors}
									/>
								</FormControl>
								<FormControl>
									<Flex>
										<ButtonCustomize content='Submit' />
									</Flex>
								</FormControl>
							</Stack>
						</form>
					</Stack>
				</Flex>
			</Center>
		</Box>
	);
}

export default AccountForm;
