import React from "react";

const Header = () => {
  return (
    <header className="px-6 header w-full mb-8 bg-white">
      <div className="flex container mx-auto items-center md:justify-between py-4 pl-2">
        <div className="w-1/2 md:w-auto text-center text-xl font-medium">
          <img
            className="inline-block h-12 header-logo pr-20"
            src="https://uxengineer.com/wp-content/uploads/2019/10/solobuy-logo.png"
            alt="Solobuy Logo"
          />
          <nav className="main-nav">
            <a href className="pr-20">
              Buy
            </a>
            <a href className="pr-20">
              Sell
            </a>
            <a href>Discover</a>
          </nav>
        </div>

        <div className="w-1/4 md:w-auto md:flex text-right pr-2">
          <div>
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/70345535_2738130392886725_7489805846143041536_n.jpg?_nc_cat=110&_nc_oc=AQlBsAaQ1TV3xtAtC8RbUivAvuXQEc2Z2X4fDuYpxioHeIJiuJ3Ruukw0-l0fFNnK40&_nc_ht=scontent-dfw5-2.xx&oh=95c34da2c2e2b9a95cd173949aa4e0b9&oe=5E1FB74D"
              alt=""
            />
          </div>
          <div className="hidden md:block md:flex md:items-center ml-2">
            <span className="text-sm mr-1">Nick</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
