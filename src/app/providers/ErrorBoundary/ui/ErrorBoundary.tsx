import { Component, ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';


interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <PageError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
