import React,{Component} from 'react';


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
            this.state={
                error:false,
                info:null
            }
    }

    componentDidCatch(error,info){
        this.setState({
            error:error,
            info:info
         })
    }

    render(){
        if(this.state.error){
            return (
                <div>
                  {/* <h5>Sorry. More than five characters!</h5> */}
                  <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.info}
                  </details>
                </div>
              )
        }

        return this.props.children; 
    }


}

export default ErrorBoundary
