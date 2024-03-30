import { Footer } from "flowbite-react";

const FooterComponent = () => {
    return (
        <Footer container className="bg-slate-100 mt-12">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="#"
              src="https://i.ibb.co/RDD7bZX/fashion-favicon.png"
              alt="Flowbite Logo"
              name="Fashion"
            />
            <Footer.LinkGroup className="text-lg font-medium text-black">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Fashion™" year={2024} className="text-lg text-black font-medium" />
        </div>
      </Footer>
    );
};

export default FooterComponent;