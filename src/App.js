import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import EditorContainer from './EditorContainer/EditorContainer';

function App() {
  const editor = useSelector(state => state);
  const dispatch = useDispatch();
  const [config, setConfig] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    setConfig(editor);
  }, [editor])

  const onDataChange = (data) => setData(data);;
  const onSave = () => dispatch({ type: "Save", data: data });
  const onUndo = () => dispatch({ type: "Undo" });
  const onRedo = () => dispatch({ type: "Redo" });
  const onCancel = () => dispatch({ type: "Cancel" });

  return (
    <div className="App">
      <div className="App-container">
        {
          Object.keys(config).length ?
            <React.Fragment>
              <header className="App-header">
                <h1>{config.title}</h1>
                <div className="editor-actions">
                  <button id="undo" type="button" disabled={config.items.past.length === 0} onClick={onUndo}>Undo</button>
                  <button id="redo" type="button" disabled={config.items.future.length === 0} onClick={onRedo}>Redo</button>
                  <button id="save" type="button" onClick={onSave}>Save</button>
                  <button id="cancel" type="button" disabled={Object.keys(data).length === 0} onClick={onCancel}>Cancel</button>
                </div>
              </header>
              <EditorContainer {...config} onDataChange={onDataChange} />
            </React.Fragment> : null
        }
      </div>
    </div>
  );
}

export default App;
