import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { AiOutlineDown } from "react-icons/ai";
import { ThreeDots } from 'react-loader-spinner'

class App extends Component {
  state = {
    products: [],
    showFilters: true,
    sortMenu: false,
    sortType: "RECOMMENDED",
    isLoading: true
  };

  // Fetch products after mounting
  componentDidMount() {
    this.fetchingData()
  }

  fetchingData = async () => {
    try {
      const request = await fetch("https://fakestoreapi.com/products");
      const data = await request.json();
      this.setState({ products: data, isLoading: false });
    } catch (error) {
      console.log(`The Erros is ${error.message}...`);
    }
  }

  toggleFilters = () => {
    this.setState((prev) => ({ showFilters: !prev.showFilters }));
  };

  toggleSortMenu = () => {
    this.setState((prev) => ({ sortMenu: !prev.sortMenu }));
  };

  setSortType = (type) => {
    this.setState({ sortType: type, sortMenu: false });
  };

  getSortedProducts = () => {
    const { products, sortType } = this.state;
    return [...products].sort((a, b) => {
      if (sortType === "LOW TO HIGH") return a.price - b.price;
      if (sortType === "HIGH TO LOW") return b.price - a.price;
      return 0;
    });
  };

  render() {
    const { products, showFilters, sortMenu, sortType, isLoading } = this.state;
    const sortedProducts = this.getSortedProducts();

    return (
      <div className="app-container">
        <Header />
        <div className="banner">
          <h2 className="banner-heading">DISCOVER OUR PRODUCTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        {/* Top Action Bar */}
        <div className="action-bar">
          <span>{products.length} ITEMS</span>

          <span className="filter-toggle" onClick={this.toggleFilters}>
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </span>

          <div className="sort-box" onClick={this.toggleSortMenu}>
            {sortType} <AiOutlineDown size={14} />
          </div>

          {sortMenu && (
            <div className="sort-menu">
              <p onClick={() => this.setSortType("RECOMMENDED")}>RECOMMENDED</p>
              <p onClick={() => this.setSortType("NEWEST FIRST")}>NEWEST FIRST</p>
              <p onClick={() => this.setSortType("POPULAR")}>POPULAR</p>
              <p onClick={() => this.setSortType("HIGH TO LOW")}>PRICE : HIGH TO LOW</p>
              <p onClick={() => this.setSortType("LOW TO HIGH")}>PRICE : LOW TO HIGH</p>
            </div>
          )}
        </div>

        {/* Sidebar filters */}
        <div className="content-grid">
          {showFilters && (
            <div className="filters-panel">
              <Filters />
            </div>
          )}

          {/* Product List */}
          <div className="product-grid">
            {isLoading ?
              <div >
                < ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#4fa94d"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: '20px' }}
                  wrapperClass="custom-loader"
                  visible={true}
                /> </div> :
              sortedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            }
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
