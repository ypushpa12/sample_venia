import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productsActions";
import BreadcrumbPage from "../../BreadCrumb/BreadCrumb";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import jewellery from "../../ProductListing/JewelleryListings/jewellery.png";
import Jewellery from '../Jewellery/Jewellery';
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const updatedList = products.filter((value) => value.category === "jewelery");
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")

    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="productlisting">
        <div className="productlisting-mobile">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__image">
                <img src={jewellery} alt="jewellery" />
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__title">
                <h3>Jewellery</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="productlisting-desktop">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="productlisting__title">
                <h3>Jewellery</h3>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="productlisting__image">
                <img src={jewellery} alt="Jewellery" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="breadcrumbslist">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <BreadCrumb />
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <div className="product-filter">
                  <button><FaArrowsAlt /> Filter Results</button><button><BiSort /> Sort Ptoducts</button>
                </div>
                <div className="breadcrumbslist__filter">
                  <p>{updatedList.length} Products</p>
                  <div className="breadcrumbslist__sort">
                    <select>
                      <option>Sort by Latest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="productfilter">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="productfilters">
                  <h4>Filters</h4>
                  <p>Type</p>
                  <label><input type="checkbox" />Legends</label>
                  <label><input type="checkbox" />Gold Plated</label>
                  <label><input type="checkbox" />Silver Plated</label>
                  <label><input type="checkbox" />Rose Gold</label>
                  <hr></hr>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <Jewellery />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
