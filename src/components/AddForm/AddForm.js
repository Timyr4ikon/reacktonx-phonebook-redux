import React,{Component} from "react";
import "./AddForm.css";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { add } from "../../redux/actions/index";
import shortid from "shortid";

class AddForm extends Component {
  
    onSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.allUsers.find(
        (el) => el.name === this.props.nameValue || el.number === this.props.numberValue
      )
    ) {
      this.props.error();
      setTimeout(() => {
        this.props.error();
      }, 500);
      return;
    } else {
      const newContact = {
        name: this.props.nameValue,
        number: this.props.numberValue,
        id: shortid.generate(),
      };
      this.props.add(newContact);
      this.props.onReset();
      
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <span className="span">Name</span>
        <input
          className="input"
          type="text"
          value={this.props.nameValue}
          name="addFormName"
          onChange={this.props.onChange}
          required
        />
        <span className="span">Number</span>
        <input
          type="number"
          className="input"
          value={this.props.numberValue}
          name="number"
          onChange={this.props.onChange}
          required
        />
        <button className="btn" type="submit">
          a:d:d
        </button>
      </form>
    );
  }
};

AddForm.propTypes = {
  nameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset : PropTypes.func.isRequired,
  error : PropTypes.func.isRequired,
  allUsers :PropTypes.array.isRequired,
  add : PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  allUsers: state.usersList,
});

const mapDispatchToProps = {
  add,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
