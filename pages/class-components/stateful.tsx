import React from "react";

interface ComponentProps {}
interface ComponentState {
  count: number;
}

class Component extends React.Component<ComponentProps, ComponentState> {
  // a constructor is only needed if state is initialized
  constructor(props: ComponentProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount(n: number) {
    this.setState((currentState) => ({
      count: currentState.count + n,
    }));
  }

  // shouldComponentUpdate(nextProps: ComponentProps, nextState: ComponentState) {
  //   console.log("shouldComponentUpdate()", nextState);
  //   return true;
  // }

  // componentDidUpdate(
  //   previousProps: ComponentProps,
  //   previousState: ComponentState
  // ) {
  //   console.log("componentDidUpdate()", previousState);
  // }

  render() {
    return (
      <section>
        <h2>Stateful Class Component</h2>
        <button onClick={() => this.incrementCount(5)}>
          Count: {this.state.count}
        </button>
      </section>
    );
  }
}

export default Component;
