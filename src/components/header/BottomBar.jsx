import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const BottomBar = () => {
  return (
    <div className="bg-[#FF624c]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div>
            <ul className="flex items-center gap-[80px] text-white fonnt-['Montserrat'] font-bold">
              <li>
                <Link
                  className="flex items-center gap-x-4"
                  to={"/product-list"}
                >
                  <FaBars />
                  All Categories
                </Link>
              </li>
              <li>
                <Link to={"/product-list"}>Products</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contract"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-[80px] text-white fonnt-['Montserrat'] font-bold">
              <li>
                <Link
                  className="flex items-center gap-x-4"
                  to={"#"}
                >
                 LIMITED SALE 👋🏻
                </Link>
              </li>
              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>
            
              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
