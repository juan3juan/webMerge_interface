import Header from "../components/Header";
import "./css/authorize.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return (
    <div>
      <Header content="WebMerge Settings" />
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first" />

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Api key"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Api Secret"
            />
            <input type="submit" className="fadeIn fourth" value="Authorize" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Don't have a WebMerge account?Sign up here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
