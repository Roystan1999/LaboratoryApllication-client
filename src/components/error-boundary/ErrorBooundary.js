import React, { Component } from 'react';
import Fallback from '../Fallback/Fallback';

export class ErrorBoundary extends Component {
    constructor(props){
    super(props)
    this.state= {
        hasError: false
    }}

    static getDerivedStateFromError(error){
    console.log("getDerivedStateFromError");
    console.log(error);
    return{
        hasError:true
    }
    }

    componentDidCatch(error,info)
    {
        console.log(" componentDidCatch");
        console.log(error);
        console.log(info);
    }
 
    
  render() {

      if(this.state.hasError)
      {
          return <div><Fallback/></div>
      }
      else{
          return this.props.children
      }
    
  }
}

export default ErrorBoundary;
