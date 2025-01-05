import LinkButton from "../components/ui/LinkButton";
import img from "/images/404.png";
function ErrorPage() {
  return (
    <main>
      <div className="container flex flex-col justify-center items-center stp-30 h-screen">
        <div className="">
          <img src={img} alt="" />
        </div>
        <h1 className="display-4">Page Not Found</h1>
        <p className="text-lg text-bodyText text-center py-8">
          We’re sorry, the page you requested could not be found please go back
          to the homepage
        </p>
        <LinkButton link="/" text="Go Home" />
      </div>
    </main>
  );
}

export default ErrorPage;
