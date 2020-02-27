import { Box } from '@rocket.chat/fuselage';
import React from 'react';

import './BurgerMenuButton.css';
import { useQueryStringParameter } from '../../contexts/RouterContext';
import { useSession } from '../../contexts/SessionContext';
import { useSidebar } from '../../contexts/SidebarContext';

export const BurgerMenuButton = () => {
	const [isSidebarOpen, setSidebarOpen] = useSidebar();
	const isLayoutEmbedded = useQueryStringParameter('layout') === 'embedded';
	const unreadMessagesBadge = useSession('unread');

	const handleClick = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return <Box
		is='button'
		aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
		className={[
			'rc-old',
			'burger',
			!!isSidebarOpen && 'menu-opened',
		].filter(Boolean).join(' ')}
		type='button'
		onClick={handleClick}
	>
		<Box is='i' className='burger__line' aria-hidden='true' />
		<Box is='i' className='burger__line' aria-hidden='true' />
		<Box is='i' className='burger__line' aria-hidden='true' />
		{!isLayoutEmbedded && unreadMessagesBadge
		&& <Box className='unread-burger-alert color-error-contrast background-error-color'>
			{unreadMessagesBadge}
		</Box>}
	</Box>;
};
