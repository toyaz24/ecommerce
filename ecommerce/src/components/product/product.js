import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from "react-redux";
import './product.css';
import { getColorAction, getFeaturedProductAction, getMaterialAction, getProductAction } from '../../redux/action/productAction';

export default function Product() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProductDetail() {
          dispatch(getProductAction());
          dispatch(getFeaturedProductAction());
          dispatch(getColorAction())
          dispatch(getMaterialAction())
        }
        getProductDetail();
    }, []);

    let products = useSelector((state) => {
        return state.product.products
    });

    let featureProducts = useSelector((state) => {
        return state.product.featuredProducts
    });

    let colors = useSelector((state) => {
        return state.product.colors
    });

    let materials = useSelector((state) => {
        return state.product.materials
    });
  return (
    <>
    <Card className={`mx-5 mt-5 mb-5 table-border`}>
    <Typography className="px-4 mx-3" variant="h6" id="tableTitle" component="div" STYLE="font-weight:bold" >
    <div className="row mt-3 table-header-custom">
      <span>Redeem</span>
      <div>
      <hr className="w-25 h-25 mt-1 backgroundColor"></hr>
      </div>
      </div>
      </Typography> 
      <div className="row py-4">
      {products.map((user) => (
            <div className="col-md-3">
            <CardActionArea>
              <img src={''} className="rcorners"/>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 plr5 m0">
            <CardActions>
            <select name="selectAccount" id="selectAccount" className="redeem-button" style={{outline:"0px"}}>
                <option value="">Select Account</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="5000">5000</option>
              </select>
              <select name="selectQuantity" id="selectQuantity" className="redeem-button" style={{outline:"0px"}}>
                <option value="">Select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </CardActions>
            </div>
            <div className="mx-2">
            <button className="backgroundColor w-100" >
                Redeem
            </button>
            </div>
            </div>
    
        ))}
                  </div>

    </Card>
    </>
  );
}