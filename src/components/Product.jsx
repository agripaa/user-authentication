import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import data from './data/product.json'
import { useState , useEffect } from 'react'
import { createTheme } from '@mui/system';
import './css/Product.css'

const Product = () => {
    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        setProductList(data.product)
    }, []);

    const theme = createTheme({
        spacing: 8,
    });
    theme.spacing(2)
  return (
    <div>
        <section id='product'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='fs-5 text-center mb-0'>Our Product</h3>
                        <h1 className='display-6 text-center mb-4'>Our <b>Awesome </b>Product</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className='row items'>
                    {productList.map((product, index) => {
                        return(
                        <Card sx={{ maxWidth: 345, maxHeight: 345 , margin: 2.1, justifyContent: 'space-between', boxShadow: 100 }} className='card' key={index}>
                            <CardActionArea>
                                <CardMedia component="img" height="240" image={product.image} alt={product.name}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography>
                                        Rp.{product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        )
                    })}
                </div>
                <button className='btn btn-outline ms-auto px-4 rounded-pill button'  >Other Product</button>
            </div>
        </section>
    </div>
  )
}

export default Product