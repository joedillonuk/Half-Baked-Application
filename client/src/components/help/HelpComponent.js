import React, {Component from 'react'};

const Help = (props) => {

  constructor(props){
    super(props);

    this.state={
      helpView: false,
    }
    this.setHelpView = this.setHelpView.bind(this);
  }

  setHelpView(){
    this.setState({helpView: !this.state.helpView})
  }

  render(){


      return (
        <div>
          <p>
            Some information about the application, how to use etc will go in here.
          </p>
        </div>
      )

  }
}

export default Help
