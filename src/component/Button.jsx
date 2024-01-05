function Button({children,onClick,style }){
    return(
            <button style={style} onClick={onClick} className="btn">
                {children}
            </button>

    )
}

export default Button;