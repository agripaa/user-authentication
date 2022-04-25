import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import data from './data/product.json'
import { useState , useEffect } from 'react'
import './css/Services.css'
import { createTheme } from '@mui/system';

const Services = () => {
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
        <section id='service'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='fs-5 text-center mb-0'>Our Services</h3>
                        <h1 className='display-6 text-center mb-4'>Our <b>Awesome </b>Services</h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className='row'>
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
            </div>
        </section>
    </div>
  )
}

export default Services