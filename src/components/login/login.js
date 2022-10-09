import { insertHtml } from "../../helper/add-remove-elements";
import "./login.css";

class Login {
  constructor() {
    this.server_url = "";
    this.app_id = "";
  }

  setInLocalStorage(server_url, app_id) {
    localStorage.setItem("config.server_url", server_url);
    localStorage.setItem("config.app_id", app_id);
  }

  login() {
    window.location.href = `https://${this.server_url}/oauth2/authorize?app_id=${this.app_id}&l=en&brand=deriv`;
  }

  render() {
    const html = `<form  method="post">
        <div class="container">
        <label for="appId"><b>AppId</b></label>
          <input type="text" placeholder="Enter AppId" name="appId" id='app-id' required>
          <label for="qaBox"><b>QaBox</b></label>
          <input type="text" placeholder="Enter QaBox" name="qaBox" id='qa-box-url' required>
          <button type="submit" id='login-btn'>Login</button>
        </div>
      </form>`;

    insertHtml("#app", "beforeend", html);
    document.getElementById("login-btn").addEventListener("click", (e) => this.handleLogin(e));
  }

  handleLogin(event) {
    event.preventDefault();
    this.server_url = document.getElementById("qa-box-url").value;
    this.app_id = document.getElementById("app-id").value;
    this.setInLocalStorage(this.server_url, this.app_id);
    this.login();
  }

}

export default Login;
