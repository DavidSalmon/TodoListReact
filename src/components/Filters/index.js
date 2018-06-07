import { connect } from 'react-redux'
import Filters from './presentational'
import {setFilter} from 'store/ducks/filters'

const mapStateToProps =  (state)=> ({})

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (filter) => {dispatch(setFilter(filter))}
})

export default connect(mapStateToProps,mapDispatchToProps)(Filters)