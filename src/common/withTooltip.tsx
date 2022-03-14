import React from "react";

interface State {
  showTooltip: boolean;
}

function withTooltip(Component: any) {
  return class Withooltip extends React.Component<any, State> {
    state: Readonly<State> = { showTooltip: false };

    mouseOver = () => this.setState({ showTooltip: true });

    mouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component showTooltip={this.state.showTooltip} {...this.props} />
        </div>
      );
    }
  };
}
export default withTooltip;
