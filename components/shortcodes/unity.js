import { default as ReactUnity, UnityContent as ReactUnityContent } from "react-unity-webgl";

class Unity extends React.Component {
  componentDidMount() {
    console.log(this.props)
    // var unityContent = new ReactUnityContent(
    //   "/static/2020_02_22_unity_setup/WebGLBuild.json",
    //   "/static/2020_02_22_unity_setup/UnityLoader.js"
    // );
    var unityContent = new ReactUnityContent(
      this.props.buildJsonPath,
      this.props.unityLoaderJsPath,
      this.props.unityConfig
    );
    this.setState((state, props) => {
      return {
        unityContent
      }
    });
  }

  render() {
    if (this.state === null || this.state.unityContent === undefined) {
      return null
    }
    return (<ReactUnity unityContent={this.state.unityContent} />);
  }
}

export default Unity
