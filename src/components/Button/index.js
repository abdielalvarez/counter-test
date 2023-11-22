import '../../styles/components/button/button.css'

const Button = ({ children, onClick, type = 'button' }) => (
    <button
        type={type}
        onClick={onClick}
        className="button"
    >
        {children}
    </button>
)

export default Button