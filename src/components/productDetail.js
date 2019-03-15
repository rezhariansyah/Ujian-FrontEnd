import React from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';
import { connect } from 'react-redux'

class ProductDetail extends React.Component {
    state = {products : {}}
    componentDidMount() {
        this.getDataApi()
    }
    getDataApi = () => {
        var idUrl = this.props.match.params.id
        Axios.get(urlApi+'/products/'+idUrl)
        .then((res) => {
            this.setState({products : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    qtyValidation = () => {
        var qty = this.refs.inputQty.value
        if(qty < 1) {
            this.refs.inputQty.value = 1 //dipaksa minimal 1
        }
    }

    render (){
        var {nama,img,discount,deskripsi,harga} = this.state.products
        return (
            <div className='container'>               
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card" style={{width: '100%'}}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <h1 style={{color :'#4C4C4C'}}>{nama}</h1>
                        <div style={{backgroundColor:'#D50000',
                                     width:'50px',
                                     height:'22px',
                                     color : 'white',
                                     textAlign : "center",
                                     display : 'inline-block',
                                     borderRadius : '4px'}}>
                            {discount}%
                        </div>
                        <span style={{fontSize:'12px',
                                      fontWeight:'600',
                                      color:'#606060',
                                      marginLeft:'10px',
                                      textDecoration:'line-through'}}> Rp. {harga}</span>
                        <div style={{fontSize:'24px',
                                     fontWeight:'700',
                                     color:'#FF5722',
                                     marginTop:'20px'}}>Rp. {harga - (harga * (discount/100))}</div>

                        <div className='row'>
                            <div className='col-md-2'>
                                <div style={{marginTop:'15px',
                                        color:'#606060',
                                        fontWeight:'700',
                                        fontSize:'14px'}}>Jumlah
                                </div>
                            <input type='number' min={1} ref='inputQty' onChange={this.qtyValidation} className='form-control' style={{width:'60px',
                                                                                          marginTop:'10px'}} />
                            </div>
                            <div className='col-md-6'>
                                <div style={{marginTop:'15px',
                                            color:'#606060',
                                            fontWeight:'700',
                                            fontSize:'14px'}}>Catatan Untuk penjual (Opsional)
                                </div>
                                <input type='text' style={{marginTop:'10px', width:'350px'}} placeholder='Contoh warna putih, Ukuran XL, Edisi kedua' className='form-control' />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-md-8'>
                                <p style={{color:'#606060',fontStyle:'italic'}}>{deskripsi}</p>
                            </div>
                        </div>
                        {this.props.username === ""
                        ?
                        <div className='row mt-4'>
                            <input disabled className='btn border-secondary col-md-2' value='Add To Wishlist' />
                            <input disabled className='btn btn-primary col-md-3' value='Beli Sekarang' />
                            <input disabled className='btn btn-success col-md-3' value='Masukan ke Keranjang' />
                        </div>
                        :
                        <div className='row mt-4'>
                            <input className='btn border-secondary col-md-2' value='Add To Wishlist' />
                            <input className='btn btn-primary col-md-3' value='Beli Sekarang' />
                            <input className='btn btn-success col-md-3' value='Masukan ke Keranjang' />
                        </div>  
                        }                                                                    
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}
export default connect(mapStateToProps)(ProductDetail)