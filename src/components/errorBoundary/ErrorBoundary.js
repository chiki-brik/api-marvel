import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // static getDerivedStateFromError(error) { // error - объект ошибки
    //     // занимается только тем, что обновляет состояние
    //     return {error: true}; // по факту это аналог setState который работает только с ошибкой
        
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;