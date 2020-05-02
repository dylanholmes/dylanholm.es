class Anchor extends React.Component {
  componentDidMount() {
    this.hashChange = this.hashChange.bind(this);
    window.addEventListener("hashchange", this.hashChange, false);
    this.hashChange()
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashChange, false);
  }

  hashChange() {
    this.setState((state, props) => {
      return {
        windowHash: window.location.hash.substring(1)
      }
    });
  }

  render() {
    return (this.state && this.state.windowHash == this.props.id)
      ?
        <>
          <div id={this.props.id}>{this.props.children}</div>
            <style jsx>{`
            #${this.props.id} {
              animation: highlighted-post-fade 2s;
              animation-timing-function: ease-out;
              background-color: #fff5de
            }

            @keyframes highlighted-post-fade{
              0% {
                background-color: #ffc84a
              }
              100% {
                background-color: #fff5de
              }
            }
          `}</style>
        </>
      :
        <>
          <div id={this.props.id}>{this.props.children}</div>
        </>
    ;
  }
}

export default Anchor
