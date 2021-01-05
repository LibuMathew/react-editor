import React from 'react';
import { useDispatch } from "react-redux";
import FormBuilder from '../FormBuilder/FormBuilder';
import './EditorContainer.css';

const NoItemSelected = () => (
    <div className="no-selection">
        <div className="question-mark">(⊙_⊙;)</div>
        <div>No Item Selected!,</div>
        <div>Please select an Item for showing form details.</div>
    </div>
);

const NoFieldExist = () => (
    <div className="no-selection">
        <div>Sorry, we don't need your input, our hackers will crack the details 😎</div>
        <div>🤔 Hey, What happened? Why confused?</div>
        <div>Don't worry, it's just a JOKE [smile please😂🤣😍], Actually fields are not configured for this item.</div>
    </div>
);

const ItemFormContainer = (props) => {
    return (
        <div className="form-container">
            {
                props.selectedItem === null ? <NoItemSelected /> : (
                    props.selectedItem && props.selectedItem.fields && props.selectedItem.fields.length ?
                        <FormBuilder onDataChange={(state) => props.onDataChange(state)} config={props.selectedItem} {...props} />
                        : <NoFieldExist />
                )
            }
        </div>
    );
};

const ListItem = ({ item, isActive, handleClick }) => {
    return <li className={isActive === item.id ? 'active' : ''} onClick={() => handleClick(item)}>{item.name}</li>;
};

const ItemPanel = (props) => {
    const dispatch = useDispatch();

    function onItemClick(ev) {
        dispatch({ type: "SelectItem", selectedItem: ev })
    }

    return (
        <React.Fragment>
            <ul className="item-panel">
                {props.items.present.map(item => (
                    <ListItem key={item.id} item={item} isActive={props.selectedItem?.id} handleClick={(ev) => onItemClick(ev)} />
                ))}
            </ul>
            <ItemFormContainer {...props} selectedItem={props.selectedItem} />
        </React.Fragment>
    );
};

const EditorContainer = (props) => (
    <div className="App-editor-container">
        <ItemPanel {...props} />
    </div>
);
export default EditorContainer;