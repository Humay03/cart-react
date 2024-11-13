const flexStyles = ({ inline, justifyContent, direction, alignItems = "center" }) => ({
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
})

export default function Flex({ children, as = 'div', ...props }) {
    const Element = as;
    return (
        <Element style={Object.assign(flexStyles(props), props.style)} className={props.className}>
            {children}
        </Element>
    )
}
