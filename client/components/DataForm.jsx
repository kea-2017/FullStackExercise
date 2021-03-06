import React from 'react'
import {connect} from 'react-redux'
import {postData,updateData } from '../actions/DataActions'




class DataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

componentWillUpdate(nextProps){
  if(nextProps.dataToEdit.id != this.props.dataToEdit.id){
    this.setState({
      data: nextProps.dataToEdit
    })
  }
}


  AddToData(evt) {
    var data = this.state.data
    data[evt.target.name] = evt.target.value
    this.setState({data: data})
  }

  submitData(evt) {
    evt.preventDefault()
    if (this.props.dataToEdit.id) {
      console.log('editing')
      this.props.dispatch(updateData(this.state.data,this.props.dataToEdit.id))
    } else {
      console.log('adding')
      this.props.dispatch(postData(this.state.data))
    }
    //dispatch your data to some kind of postData request
  }



  render() {
      const {text, numbers} = this.state.data
       return (
          <form onSubmit={this.submitData.bind(this)}>
            <input name="text" placeholder="text" value={text} type="text" onChange={(evt) => this.AddToData(evt)}/>
            <input name="numbers" placeholder="123" type="number" value={numbers} onChange={(evt) => this.AddToData(evt)}/>
            <input type="submit"/>
          </form>

        )
      }
}


function mapStateToProps(state){
  return {dataToEdit:state.dataToEdit}
}


export default connect(mapStateToProps)(DataForm)
