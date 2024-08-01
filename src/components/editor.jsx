import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { useState } from 'react';
import {
	TbLayoutSidebarLeftCollapse,
	TbLayoutSidebarRightCollapse,
} from 'react-icons/tb';

const Editor = (props) => {
	const { displayName, language, value, onChange } = props;

	const [open, setOpen] = useState(true);

	const options = {
		mode: language,
		theme: 'material',
		lineNumbers: true,
		lineWrapping: true,
		lint: true,
	};

	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<>
			<div className={`editor-container ${open ? '' : 'collapsed'}`}>
				<div className="editor-head">
					<h3>{displayName}</h3>
					<button
						type="button"
						onClick={() => setOpen((preOpen) => !preOpen)}
					>
						{open ? (
							<TbLayoutSidebarLeftCollapse
								color="#fff"
								size={25}
							/>
						) : (
							<TbLayoutSidebarRightCollapse
								color="#fff"
								size={25}
							/>
						)}
					</button>
				</div>

				<ControlledEditor
					onBeforeChange={handleChange}
					options={options}
					value={value}
					className="codemirror-wrapper"
				/>
			</div>
		</>
	);
};

export default Editor;
