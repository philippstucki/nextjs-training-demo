import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class CustomErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: undefined,
      errorInfo: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    return this.state.errorInfo ? (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    ) : (
      this.props.children
    );
  }
}
