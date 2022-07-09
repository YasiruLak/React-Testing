import React,{Component} from "react";
import PropTypes from "prop-types";

class GDSEButton extends Component {
    static propsTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        label: PropTypes.string,
        size: PropTypes.string,
        disabled: PropTypes.bool,
        color: PropTypes.string,
        types: PropTypes.string,
        endIcon: PropTypes.string,
        startIcon: PropTypes.string,

    }
    static defaultProps = {
        className: "",
        color: "primary",
        label: "",
        size: 'medium',
        variant: "contained",
        disabled: false,
        type: "button"
    }

    handleButtonClick = (event) => {
        const {onClick, disabled} = this.props;

        if(disabled) return;

        onClick && onClick({event});
    }

    renderChildren = (label, children) => {
        if(label) return label;
        if(children)  return children;
    }

    render() {
        const {
            children,
            label,
            className,
            color,
            size,
            type,
            variant,
            disabled,
            startIcon,
            endIcon,
            style,
        } = this.props;

        return(
            <GDSEButton
                className={className}
                size={size}
                endIcon={endIcon}
                variant={variant}
                disabled={disabled}
                color={color}
                type={type}
                onClick={this.handleButtonClick}
                style={style}
            >
                {this.renderChildren(label, children)}
            </GDSEButton>
        )
    }
}

export default GDSEButton;
