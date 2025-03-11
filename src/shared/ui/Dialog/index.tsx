import { FC, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type DialogProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	transparent?: boolean;
	isCloseBtn?: boolean;
	size?: 'sm' | 'md' | 'lg';
};

export const Dialog: FC<DialogProps> = ({ isOpen, onClose, children, size = 'md', transparent, isCloseBtn }) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [onClose]);

	const overlayStyle: React.CSSProperties = {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		backgroundColor: transparent ? 'rgba(24, 24, 24, 0.3)' : 'rgba(0, 0, 0, 0.5)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1000,
		cursor: 'pointer',
	};

	const contentStyle: React.CSSProperties = {
		position: 'relative',
		background: '#fff',
		padding: '20px',
		borderRadius: '12px',
		width: size === 'sm' ? '300px' : size === 'md' ? '600px' : '1000px',
		boxShadow: '0 10px 60px rgba(0, 0, 0, 0.15)',
		cursor: 'default',
	};

	const closeBtnStyle: React.CSSProperties = {
		position: 'absolute',
		top: '10px',
		right: '10px',
		background: 'transparent',
		border: 'none',
		fontSize: '20px',
		cursor: 'pointer',
		color: '#333',
		opacity: 0.7,
		transition: 'opacity 0.2s',
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					style={overlayStyle}
					onClick={onClose}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						style={contentStyle}
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						{isCloseBtn && (
							<button style={closeBtnStyle} onClick={onClose}>
								✖
							</button>
						)}
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
