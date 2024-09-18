import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../contexts/AuthContext";

function Registration() {
  const [operation, setOperation] = useState(true);
  const [email, setEmail] = useState("ahmedabdelaziz@example.com");
  const [password, setPassword] = useState("zoz");
  const navigate = useNavigate();
  const { Login, isAuthenticated } = useAuth();
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/home", {
          replace: true,
        });
      }
    },
    [isAuthenticated, navigate]
  );
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function toggle() {
    setOperation((operation) => !operation);
  }

  function handleSignUpChange(e) {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSignInChange(e) {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    setEmail(signUpData.email);
    setPassword(signUpData.password);
  }

  function handleSignInSubmit(e) {
    e.preventDefault();
    if (signInData.email && signInData.password) {
      Login(signInData.email, signInData.password);
    }
  }

  return (
    <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center justify-center">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto w-full">
          <RegisterForm.Container
            className={`${
              operation ? "ml-[320px] sm:ml-0" : "mr-[320px] sm:mr-0"
            }`}
          >
            <RegisterForm.SignUpContainer operation={operation}>
              <RegisterForm.Form onSubmit={handleSignUpSubmit}>
                <RegisterForm.Title>Create Account</RegisterForm.Title>
                <RegisterForm.Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signUpData.name}
                  onChange={handleSignUpChange}
                />
                <RegisterForm.Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                />

                <div className="w-full flex items-center justify-around">
                  <div className="flex gap-[10px]">
                    <label htmlFor="user">user</label>
                    <input
                      type="radio"
                      id="user"
                      name="role"
                      value="user"
                      checked={signUpData.role === "user"}
                      onChange={handleSignUpChange}
                    />
                  </div>
                  <div className="flex gap-[10px]">
                    <label htmlFor="admin">admin</label>
                    <input
                      type="radio"
                      id="admin"
                      name="role"
                      value="admin"
                      checked={signUpData.role === "admin"}
                      onChange={handleSignUpChange}
                    />
                  </div>
                </div>
                <RegisterForm.Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                />
                <RegisterForm.Button type="submit">Sign Up</RegisterForm.Button>
                <button
                  type="button"
                  className="bg-[#ff4b2b] border-[#ff4b2b] text-[#ffffff] py-[12px] px-[45px] mt-5 rounded-full hover:bg-orange-600 block sm:hidden"
                  onClick={toggle}
                >
                  Sign In
                </button>
              </RegisterForm.Form>
            </RegisterForm.SignUpContainer>
            <RegisterForm.SignInContainer operation={operation}>
              <RegisterForm.Form onSubmit={handleSignInSubmit}>
                <RegisterForm.Title>Sign In</RegisterForm.Title>
                <RegisterForm.Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                />
                <RegisterForm.Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                />
                <RegisterForm.Anchor href="#">
                  Forget Your Password
                </RegisterForm.Anchor>
                <RegisterForm.Button type="submit">Sign In</RegisterForm.Button>
                <button
                  type="button"
                  className="bg-[#ff4b2b] border-[#ff4b2b] text-[#ffffff] py-[12px] px-[45px] mt-5 rounded-full hover:bg-orange-600 block sm:hidden"
                  onClick={toggle}
                >
                  Sign Up
                </button>
              </RegisterForm.Form>
            </RegisterForm.SignInContainer>
            <RegisterForm.OverlayContainer operation={operation}>
              <RegisterForm.Overlay
                operation={operation}
                className="hidden sm:block"
              >
                <RegisterForm.LeftOverlayPanel operation={operation}>
                  <RegisterForm.Title>Welcome Back!</RegisterForm.Title>
                  <RegisterForm.Paragraph>
                    To keep connected with us please login with your personal
                    info
                  </RegisterForm.Paragraph>
                  <RegisterForm.GhostButton onClick={toggle}>
                    Sign In
                  </RegisterForm.GhostButton>
                </RegisterForm.LeftOverlayPanel>
                <RegisterForm.RightOverlayPanel operation={operation}>
                  <RegisterForm.Title>Hello, Friend!</RegisterForm.Title>
                  <RegisterForm.Paragraph>
                    Enter your personal details and start journey with us
                  </RegisterForm.Paragraph>
                  <RegisterForm.GhostButton onClick={toggle}>
                    Sign Up
                  </RegisterForm.GhostButton>
                </RegisterForm.RightOverlayPanel>
              </RegisterForm.Overlay>
            </RegisterForm.OverlayContainer>
          </RegisterForm.Container>
        </div>
      </div>
    </div>
  );
}

export default Registration;
