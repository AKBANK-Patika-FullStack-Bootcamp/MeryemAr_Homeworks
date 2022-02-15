import './App.css';

import {Home} from './Home';
import {DaireBilgileri} from './DaireBilgileri';
import {KullaniciBilgileri} from './KullaniciBilgileri';
import {Navigation} from './Navigation';
import React,{Component} from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

export class App extends Component{
  constructor(props){
    super(props);
    this.state={checked:false, error: null, errorInfo: null}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render () {
    if (this.state.errorInfo) {
      // Error path
      return (<div>error</div>)
    }

    return (<BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>
     <Navigation/>

       <Routes>
       <Route path='/' component={Home} exact/>
       <Route path='/dairebilgileri' element={<DaireBilgileri />}/>
       <Route path='/kullanicibilgileri' element={<KullaniciBilgileri />}/>  
       </Routes> 
    </div>
    </BrowserRouter>)
  };
}


export default App;