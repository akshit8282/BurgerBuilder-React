import { React,Component } from "react"
import Modal from "../components/UI/Modal/Modal"
import Aux from '../hoc/aut'

const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }

componentDidMount(){
    this.reqinterceptor=axios.interceptors.request.use(req=>{
        this.setState({error:null});
        return req;
    })
    
    this.resinterceptor=axios.interceptors.response.use(res=>res,err=>{
        this.setState({error:err});
    })
}
componentWillUnmount(){
axios.interceptors.request.eject(this.reqinterceptor);
axios.interceptors.response.eject(this.resinterceptor);
}

errorConfigured=()=>{
    this.setState({error:null});
}
render(){
    return(
        <Aux>
        <Modal show={this.state.error} modalClosed={this.errorConfigured}>
           {this.state.error?this.state.error.message:null}
        </Modal>
        <WrappedComponent {...this.props} />
        </Aux>
    )
}
    }
}
export default withErrorHandler;