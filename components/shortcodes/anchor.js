

import { default as ReactUnity, UnityContent as ReactUnityContent } from "react-unity-webgl";


// const Anchor = ({ id, children }) => (
//   <>
//     <div id={id}>{children}</div>
//     <script>
//       console.log(window.location.hash)

//       if (window.location.hash == id) {
//         // document
//         //   .getElementById("id")
//         //   .classList
//         //   .add({id})
//       }
//     </script>
//     <style jsx>{`
//       .${id} {
//         background-color: red
//       }
//     `}</style>
//   </>
// )

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
    if (this.state && this.state.windowHash == this.props.id) {
      return (
        <>
          <div id={this.props.id}>{this.props.children}</div>
            <style jsx>{`
            #${this.props.id} {
              animation: highlighted-post-fade 2s;
              animation-timing-function: ease-out;
              background-color: #fff5de
            }
  
            @keyframes highlighted-post-fade{
              0%{
                background-color: #ffe3a3
              }
              100%{
                background-color: #fff5de
              }
            }
          `}</style>
        </>
      );
    }
    return (
      <>
        <div id={this.props.id}>{this.props.children}</div>
      </>
    ); 
  }
}


export default Anchor
