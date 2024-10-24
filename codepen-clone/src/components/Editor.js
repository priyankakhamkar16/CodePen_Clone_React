import React, { useState } from 'react';
import Preview from './PreView';
import { FaCog, FaCaretDown } from 'react-icons/fa'; // Import Font Awesome icons
import '../styles/Editor.css'; // Import the CSS file

const Editor = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <div className="editor-container">
      <div className="editor-panels">
        <div className="editor-panel-wrapper">
          <div className="editor-label html-label">
            <div className="editor-left-label">
              <span className="editor-icon html-icon">/</span> <span>HTML</span>
            </div>
            <div className="editor-right-icons">
              <FaCog className="editor-settings-icon" /> {/* Settings Icon */}
              <FaCaretDown className="editor-dropdown-icon" /> {/* Dropdown Icon */}
            </div>
          </div>
          <textarea
            className="editor-panel"
            placeholder="HTML"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
        </div>
        <div className="editor-panel-wrapper">
          <div className="editor-label css-label">
            <div className="editor-left-label">
              <span className="editor-icon css-icon">*</span> <span>CSS</span>
            </div>
            <div className="editor-right-icons">
              <FaCog className="editor-settings-icon" /> {/* Settings Icon */}
              <FaCaretDown className="editor-dropdown-icon" /> {/* Dropdown Icon */}
            </div>
          </div>
          <textarea
            className="editor-panel"
            placeholder="CSS"
            value={css}
            onChange={(e) => setCss(e.target.value)}
          />
        </div>
        <div className="editor-panel-wrapper">
          <div className="editor-label js-label">
            <div className="editor-left-label">
              <span className="editor-icon js-icon">&#123;&#125;</span> <span>JavaScript</span>
            </div>
            <div className="editor-right-icons">
              <FaCog className="editor-settings-icon" /> {/* Settings Icon */}
              <FaCaretDown className="editor-dropdown-icon" /> {/* Dropdown Icon */}
            </div>
          </div>
          <textarea
            className="editor-panel"
            placeholder="JavaScript"
            value={js}
            onChange={(e) => setJs(e.target.value)}
          />
        </div>
      </div>
      <Preview html={html} css={css} js={js} />
    </div>
  );
};

export default Editor;
