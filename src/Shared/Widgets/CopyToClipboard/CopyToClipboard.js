import { React, useState } from 'react';
import { PropTypes } from 'prop-types';

const ClipboardButtonWidget = ({ textToCopy }) => {
	const [isCopied, setCopied] = useState(false);

	async function handleCopy() {
		await navigator.clipboard.writeText(textToCopy);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}

	return (
		<div className="indicator">
			<span
				className={isCopied ? 'indicator-item badge badge-primary' : 'hidden'}
			>
				Copied!
			</span>
			<button
				onClick={async () => await handleCopy()}
				className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-sm"
			>
				Copy
			</button>
			{isCopied}
		</div>
	);
};

export const CopyToClipboard = ClipboardButtonWidget;

ClipboardButtonWidget.propTypes = {
	textToCopy: PropTypes.string
};
