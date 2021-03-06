// ---------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ---------------------------------------------------------------------------

import React from 'react';

export interface InputBoxProps {
	title: string;
	name: string;
	className: string;
	placeHolder: string;
	errorMessage?: string;
	value?: string;
	disabled?: boolean;
	onBlur?: { (event): void };
	required?: boolean;
}

export const InputBox = React.forwardRef((props: InputBoxProps, ref: React.LegacyRef<HTMLInputElement>) => (
	<div>
		<label className={`input-label ${props.required && `required`}`}>{props.title}</label>
		<input
			type='text'
			className={props.className}
			name={props.name}
			defaultValue={props.value}
			placeholder={props.placeHolder}
			ref={ref}
			disabled={props.disabled}
			onBlur={props.onBlur}
		/>
		<div className='invalid-feedback'>{props.errorMessage}</div>
	</div>
));

InputBox.displayName = 'InputBox';
