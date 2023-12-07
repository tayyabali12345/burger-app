import Burger from '../Component/Burger'
import {connect} from 'react-redux'
import { addToCart } from '../service/actions/actions'

const mapStateToProps=state=>({
    data:state
})

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data => dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Burger)

