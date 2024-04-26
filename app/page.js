import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#F0F2F5]">
      <div className="container flex w-full">
        <div className="facebook-page flex">
          <div className="text">
            <h1>facebook</h1>
            <p>Connect with friends and the world </p>
            <p> around you on Facebook.</p>
          </div>
          <form action="#">
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />
            <div className="link">
              <button type="submit" className="login">
                Login
              </button>
              <a href="#" className="forgot">
                Forgot password?
              </a>
            </div>
            <hr />
            <div className="button">
              <a href="#">Create new account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
