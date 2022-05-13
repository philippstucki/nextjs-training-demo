import React from "react";

class Component extends React.Component {
  private textInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    console.log("component mounted");
    console.log(this.textInputRef);
    this.textInputRef.current?.focus();
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <section>
        <h2>Class Component w. Lifecycle Methods</h2>
        <input type="text" ref={this.textInputRef} />
      </section>
    );
  }
}

export default Component;
