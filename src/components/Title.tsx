interface ITitleprops {
    children: React.ReactNode
}


const Title: React.FC<ITitleprops> = (props) => {
    const {children} = props
    return <h1>{children}</h1>
}

export default Title