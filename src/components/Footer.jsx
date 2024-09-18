function Footer() {
  return (
    <footer className="bg-primary py-12 ">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto text-[8px] md:text-sm xl:text-base">
          <p className="text-white text-center">
            Copyright &copy; Ecommerce Shop By{" "}
            <span className="text-pink-200 relative -top-1 border-y border-pink-200 mr-1 md:mr-2  py-2">
              AHMED ABDELAZIZ MOHAMED{"  "}
            </span>
            <span className="hidden sm:inline-block">
              For ITI 2024. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
