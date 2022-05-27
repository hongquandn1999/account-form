import * as React from 'react';
import AccountForm from './AccountForm';

export const App = () => {
	const handleSubmitAccountForm = (values: any) => {
		console.log('Submit Form Successfully', values);
	};
	return (
		<>
			<AccountForm onSubmitForm={handleSubmitAccountForm} />
		</>
	);
};
