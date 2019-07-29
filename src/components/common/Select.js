import React from 'react'

const Select = ({ onChange, options, label }) => {
    return (
        <div className="float-right masked-select cursor-pointer">
            <div className="border-bottom-dark">
                <div className="float-left">
                    {label}
                </div>
                <div className="float-left width-20 top-padding-2">
                    <i className="material-icons">
                        arrow_drop_down
                    </i>
                </div>
                <div className="clear-both"></div>
            </div>
            <select className="absolute left top size-onepointone-rem" name="industry" onChange={onChange}>
                {options.map((option, index) =>
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>)}
            </select>
        </div>
    )
}

export default Select
