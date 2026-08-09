import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from '../Button/Button';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Optional: reset whatever state caused the error here if you can, 
    // or just let it try rendering again.
    if (this.props.onReset) {
      this.props.onReset();
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary glass">
          <div className="error-boundary__icon-wrapper">
            <AlertTriangle className="error-boundary__icon" size={48} />
          </div>
          <h2 className="error-boundary__title">Something went wrong</h2>
          <p className="error-boundary__message">
            We're sorry, but an unexpected error occurred while loading this section.
          </p>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="error-boundary__details">
              <summary>Error Details (Dev Only)</summary>
              <pre>{this.state.error.toString()}</pre>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </div>
          )}

          <Button 
            variant="primary" 
            onClick={this.handleReset}
            icon={RefreshCw}
          >
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
