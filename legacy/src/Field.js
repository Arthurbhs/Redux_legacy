import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './FieldActions'

class Field extends Component {


render(){
    return(
        <div>
            <label><h2>{this.props.value}</h2></label>
            <br/>
            <input onChange={this.props.changeValue } value={this.state.value || ''}/>
        </div>
    )
}
}

function mapStatesToProps(state) {
    return{
        value: state.Field.value
    }
}
    function mapDispathToProps(dispatch) {
        return bindActionCreators({ changeValue}, dispatch)
    }

export default connect(mapStatesToProps, mapDispathToProps )(Field)