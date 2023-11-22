import '../../styles/components/text/text.css'

const Text = ({ tag = 'p', children, ...props }) => {
    const Tag = tag
    return (
        <Tag {...props} className='text'>
            {children}
        </Tag>
    )
}

export default Text