import React, { Component } from 'react'
import image1 from '../images/img1.jpg_.webp'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import image4 from '../images/img4.jpg'
import image5 from '../images/img5.jpg'
import image6 from '../images/img6.jpg'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
export class Slider extends Component {
    constructor(){
        super()
        this.state={
            count: 1,
            images: {
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
            }
        }
    }
  render() {

      let Image= <img  style={{width: '400px', height :" 400px"}}  src={this.state.images[`image${this.state.count}`]}/>
    return (
        <>
         <div class="App"  style={{textAlign:'center'}}>
        
                {Image}
                <div  style={{ display: 'flex', justifyContent:'center', marginTop:"30px"  }}>
                    <button style={{borderRadius:'50%', fontWeight:'bolder', backgroundColor:"green", color:'white',border:'none', padding:'20px'}} onClick={() => this.setState({count: this.state.count <= 1 ? 1 : this.state.count - 1 })}><AiOutlineMinus/> </button>
                    <h2 style={{fontWeight:'bolder', color:"yellowgreen", margin:'15px 10px'}}>Image: {this.state.count}</h2>
                    <button style={{borderRadius:'50%', fontWeight:'bolder', backgroundColor:"green", color:'white',border:'none', padding:'20px'}} onClick={() => this.setState({ count: this.state.count >= 6 ? 6 : this.state.count + 1 })}> <AiOutlinePlus/> </button>
                </div>
                </div>
                </>
    )
  }
}

export default Slider