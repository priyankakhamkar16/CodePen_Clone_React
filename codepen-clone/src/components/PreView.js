import React, { useEffect, useRef } from 'react';
import '../styles/PreView.css'; // Import the CSS file

const Preview = ({ html, css, js }) => {
  const frameRef = useRef();

  useEffect(() => {
    const frame = frameRef.current;
    const document = frame.contentDocument || frame.contentWindow.document;

    document.open();
    document.write(`
      <style>
        body {
          background-color: #1e1e1e; /* Dark background for the live preview */
          color: #fff; /* White text for better readability on dark background */
          margin: 0;
          padding: 10px;
          font-family: sans-serif;
        }
        ${css}
      </style>
      ${html}
      <script>${js}<\/script>
    `);
    document.close();
  }, [html, css, js]);

  return (
    <iframe
      ref={frameRef}
      title="Preview"
      className="preview-frame" // Apply CSS class
    />
  );
};

export default Preview;
