import React, { useState, useEffect } from 'react';
import './FormBuilder.css';

const GenerateTextField = ({ control, state, onChange }) => {
    useEffect(() => {
        onChange(control.fieldValue, control.id);
    }, [control.fieldValue]);

    return <input
        className="form-control"
        type="text"
        key={control.id}
        name={control.id}
        placeholder={control.fieldPlacehoder}
        value={state[control.id] || control.fieldValue}
        onChange={(e) => { onChange(e.target.value, control.id) }}
    />
};

const GenerateCheckbox = ({ control, state, onChange }) => {
    useEffect(() => {
        onChange(control.fieldValue, control.id);
    }, [control.fieldValue]);

    return <input
        className="form-control"
        type="checkbox"
        key={control.id}
        name={control.id}
        checked={state[control.id] || control.fieldValue}
        onChange={(e) => { onChange(e.target.checked, control.id) }}
    />
};

const GenerateDropdown = ({ control, state, onChange }) => {
    useEffect(() => {
        onChange(control.fieldValue, control.id);
    }, [control.fieldValue]);

    let selectOptions = control.fieldOptions.map((opt) => {
        return (
            <option
                className="form-input"
                key={`${control.id}_${opt.optionValue}`}
                value={opt.optionValue}>
                {opt.optionName}
            </option>
        );
    });

    return <select className="form-control" value={state[control.id] || control.fieldValue} onChange={(e) => { onChange(e.target.value, control.id) }}>{selectOptions}</select>;
};

const RenderForm = ({ state, config, items, onChange }) => {
    const idx = items.present.findIndex(i => i.id === config.id);
    return idx !== -1 ? (<div key={'g_' + config.id} className="form-group">
        {
            items.present[idx].fields?.map((field) => {
                const fieldId = field.id;
                const type = field.fieldType;
                let controlMapper = {
                    "text": <GenerateTextField control={field} state={state} onChange={onChange} />,
                    "option": <GenerateDropdown control={field} state={state} onChange={onChange} />,
                    "toggle": <GenerateCheckbox control={field} state={state} onChange={onChange} />,
                };
                const input = controlMapper[type];
                if (input) {
                    return (
                        <div key={config.id + '_' + fieldId}>
                            {
                                type === 'toggle' ?
                                    <label className="form-label"
                                        key={"l" + fieldId}
                                        htmlFor={fieldId}>
                                        {input} {field.fieldName}
                                    </label> :
                                    <React.Fragment>
                                        <label className="form-label"
                                            key={"l" + fieldId}
                                            htmlFor={fieldId}>
                                            {field.fieldName}
                                        </label>
                                        {input}
                                    </React.Fragment>
                            }
                        </div>
                    )
                }
            })
        }
    </div>) : null;

}

export default function FormBuilder(props) {

    const [state, setState] = useState({});

    useEffect(() => {
        props.onDataChange(state);
    }, [state]);

    const onChange = (value, key) => {
        setState(prevState => ({ ...prevState, [key]: value }));
    }

    return (
        <div>
            <form name="dynamicForm">
                <RenderForm {...props} state={state} onChange={onChange} />
            </form>
        </div>
    );

}