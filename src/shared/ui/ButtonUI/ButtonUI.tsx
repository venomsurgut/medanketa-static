import React, {ButtonHTMLAttributes, ElementType, FC} from 'react';

import './styles.scss';

interface ButtonUIProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: ElementType;
	view?: 'primary' | 'secondary' | 'light' | 'disabled' | 'transparent' | 'link' | 'danger';
}

/**
 *
 * @param text - [string] Text into button
 * @param icon ? [JSX.Element] icon svg
 * @param view ? [string] primary | secondary | light | disabled | transparent | link
 * @example <ButtonUI text="OK" view="primary" icon={SaveIcon}>
 */

export const ButtonUI: FC<ButtonUIProps> = ({ text, icon: IconComponent, view = 'primary', className, ...props }) => {
	return (
		<button className={`${className}, ${view}, ${'button'}`} {...props}>
			{IconComponent && <IconComponent className="button-icon" />}
			{text}
		</button>
	);
};
