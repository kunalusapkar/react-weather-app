import React,{Component} from 'react'


class mainContainer extends React.Component{
  constructor(){
    super()
      this.state ={
        place:"",
        temperature:"",
        description:"",
        city:"",
        hide:"hide"
      }
      this.handleEvent = this.handleEvent.bind(this)
      this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  // componentDidMount(){
  //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=64ac6f9600c1835a2bffa4a4b678d539&units=metric`)
  //     .then(results=>{
  //       return results.json()
  //     }).then(data=>{
  //       console.log(data.weather['description'])
  //       this.setState({
  //         place:data.name,
  //         temperature:data.main.temp_min,
  //         description:data.weather[0].description,
  //         icon:data.weather[0].icon
  //       })
  //     })
  // }
  handleEvent(e){
    const {name,value} = e.target
    this.setState({
      [name]:value
    })
  }
  onFormSubmit(e){
    e.preventDefault();
    this.setState({
    city:e.target.value
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=64ac6f9600c1835a2bffa4a4b678d539&units=metric`)
      .then(results=>{
        return results.json()
      }).then(data=>{
        console.log(data)
        if(data.cod === "404" || data.cod === "400" ){
          e.preventDefault();
          alert("No city Found or Please enter the city name properly")
          window.location.reload(true);
        }
        this.setState({
          place:data.name,
          temperature:data.main.temp_min,
          description:data.weather[0].description,
          icon:data.weather[0].icon,
          hide:""
        })
     
      })
      
  }
  render(){
    if(this.state.temperature === undefined){
      throw new Error('Provide proper Input')
    }
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div class="container">
                      <form class="input-group mb-3" onSubmit={this.onFormSubmit}>
                          <input type="text" name="city" value={this.state.city} class="form-control" placeholder="Enter a city"  onChange={this.handleEvent}/>
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary" id="button-addon2">Search</button>
                          </div>
                      </form>  
                </div>
            </div>
            <div className={this.state.hide}>
              <div className="card-deck mb-3 text-center">
                  <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">{this.state.place}</h4>
                      </div>
                      <div className="card-body">
                        <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt=""></img>
                        <h1 className="card-title pricing-card-title">{this.state.temperature}<small className="text-muted"> degree</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li><b>{this.state.description}</b></li>
                        </ul>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      )
    }
}

export default mainContainer;
