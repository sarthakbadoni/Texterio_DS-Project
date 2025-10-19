import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Butt() {
  const navigate = useNavigate();

  return (
    <div className="buttocont">
      <button type="button" className="butto" onClick={() => navigate('/texteditor')}>Text Editor</button>
      <button type="button" className="butto" onClick={() => navigate('/codeeditor')}>Code Editor</button>
    </div>
  );
}
