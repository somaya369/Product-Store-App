const ErrorMessage = ({ message = " An error occurred. Please try again later." }) => {
    return <p className="status-message error">{message}</p>;
};
export default ErrorMessage;