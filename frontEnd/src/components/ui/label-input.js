import React from 'react';
import PropTypes from 'prop-types';

const VitalInput = props => {
    const { placeholder, value, visible,width} = props;
    return (
        <div className="col" style={Object.assign({}, {position: 'relative'}, width)}>
            {visible && value ? (
                <span
                    style={{
                        position: 'absolute',
                        fontSize: '11px',
                        color:'#DE972C',
                        fontWeight: '900',
                        transition:'0.7s',
                        transitionDelay:'0.2',
                        top: '-2px',
                        background: '#fff'
                    }}
                    className="input-G"
                >
                    {placeholder}
                </span>
            ) : (
                ''
            )}
            {/* <input {...props} onFocus={enableSpan} onBlur={disableSpan}/> */}
            <input {...props} />
        </div>
    );
};
VitalInput.propTypes = {
    visible: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};
VitalInput.defaultProps = {
    visible: '',
    placeholder: '',
    value: '',
};
export default VitalInput;
