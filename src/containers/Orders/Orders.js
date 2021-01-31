import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-burger'
import withErrorHandler from '../../withErrorHandler/withErrorHandler'
class Orders extends Component 
{state={
    fetchedData:[],
    loading:true,
}
    componentDidMount(){
        axios.get('/orders.json').then(res=>{
          console.log(res.data);
          const fetchedData=[];
          for(let key in res.data){
fetchedData.push(//changing object into array
    {...res.data[key],
        id:key,
    },
)}
this.setState({fetchedData:fetchedData,loading:false});
        }).catch(err=>{console.log(err)});
    }
render(){



    return(
        <div>
            <h1 style={{ "textAlign":"center"}}> Orders</h1>
            {this.state.fetchedData.map(order=>{
               return <Order key={order.id}
               ingredients={order.ingredients}
               price={order.price}
               />

            })}

        </div>
    );
}
}
export default withErrorHandler(Orders,axios);