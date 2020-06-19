import ContactItem from "../ContactItem/ContactItem";
import "./FindForm.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { del, filter } from "../../redux/actions/index";

class FindForm extends Component {
  state = {
    alert: false,
  };

  filterChange = (e) => {
    this.props.onFilter(e.target.value);
  };

  render() {
    const { allUsers, del, filterValue } = this.props;
    return (
      <div>
        {allUsers.length !== 0 ? (
          <>
            <TransitionGroup>
              {allUsers.length > 0 && (
                <CSSTransition
                  in={this.state.alert}
                  timeout={200}
                  classNames="item"
                >
                  <input
                    className="inputSearch"
                    type="text"
                    placeholder="Enter name"
                    value={filterValue}
                    onChange={this.filterChange}
                    name="findSearch"
                  />
                </CSSTransition>
              )}
            </TransitionGroup>

            <TransitionGroup>
              {filterValue.length === 0
                ? this.props.allUsers.map((el) => (
                    <CSSTransition key={el.id} timeout={200} classNames="item">
                      <ContactItem key={el.id} el={el} onDelete={del} />
                    </CSSTransition>
                  ))
                : this.props.allUsers
                    .filter((el) =>
                      el.name
                        .toLowerCase()
                        .includes(this.props.filterValue.trim().toLowerCase())
                    )
                    .map((el) => (
                      <CSSTransition
                        key={el.id}
                        timeout={200}
                        classNames="item"
                      >
                        <ContactItem key={el.id} el={el} onDelete={del} />
                      </CSSTransition>
                    ))}
            </TransitionGroup>
          </>
        ) : (
          <p className="first-contact animate__animated animate__bounce animate__heartBeat">
            Add your first Contact
          </p>
        )}
      </div>
    );
  }
}

FindForm.propTypes = {
  allUsers: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allUsers: state.usersList,
  filterValue: state.filter,
});
const mapDispathToProps = {
  del,
  onFilter: filter,
};

export default connect(mapStateToProps, mapDispathToProps)(FindForm);
